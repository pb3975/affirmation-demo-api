import fetch from 'node-fetch';
import AWS from 'aws-sdk'; 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const postData = (url = ``, data = {}) => {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => console.error(`Fetch Error =\n`, error));
};

const deleteData = (url = ``) => {
    return fetch(url, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer"
    })
    .then(response => response.json())
    .catch(error => console.error(`Fetch Error =\n`, error));
};

const updateRecord = (url = ``, data = {}) => {
    return fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};

// const clearTable = (tableName) => {
//   dynamoDb.scan(tableName, (error, result) => {
//     if (error) {
//       console.error(error);
//     }
//     else {
//       return (result.json());
//     }
//   })
// }

const insertRecord = (tableName, record) => {
  const params = {TableName: tableName, Item: record};
  dynamoDb.put(params)
};

module.exports = postData, deleteData, insertRecord, updateRecord, clearTable;


