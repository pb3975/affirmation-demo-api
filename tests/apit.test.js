const postData = require('./utils');
const uuid = require('uuid');
const timestamp = new Date().getTime();

const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

test('should create a new affirmation object', () => {
  let resp
  obj = {
    id: uuid.v1(),
    text: 'A cliche quote goes here!',
    createdAt: timestamp
  };
  postData('https://dktowbxizc.execute-api.us-east-1.amazonaws.com/test/affirmations', obj)
    .then(data => {
      console.log(data)
      data = data.json()
      expect(data.body).toBe(obj)
    .catch(error => console.error(error));
  })
})