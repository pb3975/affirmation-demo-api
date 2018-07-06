const uuid = require('uuid');
const timestamp = new Date().getTime();

exports.data = [{
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

