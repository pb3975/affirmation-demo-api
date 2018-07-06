const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
AWS.config.update({region:'us-east-1'})
const dynamoDb = new AWS.DynamoDB.DocumentClient();


const insertRecord = (tableName, record) => {
    const params = {TableName: tableName, Item: record};
    dynamoDb.put(params, (err, res) => {
        if (err) {
            throw err;
        }
        return res
    })
    };




const tableName = 'demo-affirmation-api-test';
const timestamp = new Date().getTime();

const obj = {
    id: '123',
  text: 'A cliche quote goes here!',
  createdAt: timestamp
};

let aff = insertRecord(tableName, obj)

console.log(aff);