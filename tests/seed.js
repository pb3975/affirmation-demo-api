// const data = require('./fixtures/fixtures');

const uuid = require('uuid');
const timestamp = new Date().getTime();
const fetch = require('node-fetch');


const postData = (url = ``, data = {}) => {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};


const data = [{
  id: uuid.v1(),
  text: 'You are doing great!',
  createdAt: timestamp
},
{
  id: uuid.v1(),
  text: 'Don\'t give up!',
  createdAt: timestamp
},
{
  id: uuid.v1(),
  text: 'Reach for the moon ... if you miss at least you\'ll be among the stars.',
  createdAt: timestamp
},
{
  id: uuid.v1(),
  text: ' It’s not whether you fall down but whether you get back up.',
  createdAt: timestamp
}
];


data.forEach(obj => {
  postData(`https://grzxe55cph.execute-api.us-east-1.amazonaws.com/dev/affirmations`, obj)
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error));
});