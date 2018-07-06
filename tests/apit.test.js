import { postData, deleteData, insertRecord, updateRecord, deleteRecord } from './utils';
import fetch from 'node-fetch';
const timestamp = new Date().getTime();

const table = 'demo-affirmation-api-test';

const obj = {
  id:'123',
  text: 'A cliche quote goes here!',
  createdAt: timestamp
};

// test('should create a new affirmation object', () => {
//   postData('https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations', obj)
//     .then(data => {
//       console.log(data)
//       expect(data).toEqual(obj)
//     .catch(error => console.error(error))
//   })
// })


describe('Create affirmation route', () => {
  it('should create a new affirmation record', () => {
    return postData('https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations', obj)
    .then(data => {
      console.log(data)
      expect(typeof data.id).toBe('string')
      expect(data.text).toEqual(obj.text)
      deleteRecord(table, data.id)
    })
  })
})



// test('should delete affirmation when given an id and return 200', () => {
//   insertRecord(table, obj)
//   deleteData(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`)
//   .then((err, res) => {
//     if (err) {
//       throw err;
//     }
//     expect(res.status).toBe(200);
//   })
// })

describe('Delete affirmation route', () => {
  it('should delete affirmation when given an id and return 200', () => {
    insertRecord(table, obj)
    return deleteData(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`)
    .then(data => {
      console.log(data)
      expect(data.message).toBe('record has been deleted')
    })
  })
})

// test('should update record when given an id and new text value', () => {
//   insertRecord(table, obj)
//   const newRecord = {
//     text: 'A different quote goes here!'
//   }
//   updateRecord(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/${obj.id}`, newRecord)
//   .then((err, res) => {
//     if (err) {
//       throw err;
//     }
//     res = res.json()
//     expect(res.body.text).toEqual(newRecord.text)
//   })
// })

// test('should return single affirmation when given ID', () => {
//   insertRecord(table, obj)
//   fetch(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/{id}`)
//   .then((err, res) => {
//     if (err) {
//       throw err;
//     }
//     res = res.json()
//     expect(res.body).toBe(obj)
//   })
// })

// test('should return array value when list enpoint provided', () => {
//   fetch(`https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations/`)
//   .then((err, res) => {
//     if (err) {
//       throw err;
//     }
//     res = res.json()
//     expect(res.body).toEqual(any(Array))
//   })
// })