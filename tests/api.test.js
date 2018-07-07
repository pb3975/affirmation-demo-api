import { postData, deleteData, insertRecord, updateRecord, deleteRecord } from './utils';
import fetch from 'node-fetch';
import fixtures from './fixtures';

const table = 'demo-affirmation-api-test';

describe('Create affirmation route', () => {
  it('should create a new affirmation record', () => {
    const obj = fixtures[0]
    return postData('https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations', obj)
    .then(data => {
      expect(typeof data.id).toBe('string')
      expect(data.text).toEqual(obj.text)
      deleteRecord(table, data.id)
    })
  })
})


describe('Delete affirmation route', () => {
  it('should delete affirmation when given an id and return 200', () => {
    const obj = fixtures[0]
    insertRecord(table, obj)
    return deleteData(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`)
    .then(data => {
      expect(data.message).toBe('record has been deleted')
    })
  })
})


describe('Update affirmation route', () => {
  it('should update record when given an id and new text value', () => {
    const obj = fixtures[0]
    const newRecord = {
      id: '123',
      text: 'A different quote goes here!'
    }
    insertRecord(table, obj)
    return updateRecord(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`, newRecord)
    .then(data => {
      expect(data.text).toEqual(newRecord.text)
      deleteRecord(table, obj.id)
    })
  })
})

describe('Get single affirmation route', () => {
  it('should return single affirmation record when given ID', () => {
    const obj = fixtures[0]
    insertRecord(table, obj)
    return fetch(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`)
    .then(data => {
      expect(data.status).toEqual(200)
      deleteRecord(table, obj.id)
    })
  })
})


describe('Get list of affirmations affirmation route', () => {
  it('should return array value when list enpoint provided', () => {
    const obj = fixtures[3]
    insertRecord(table, obj)
    return fetch(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations`)
    .then(data => {
      expect(typeof data).toBe('object')
      expect(data.status).toEqual(200)
      deleteRecord(table, obj.id)
    })
  })
})