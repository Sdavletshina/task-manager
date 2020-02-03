const mongodb = require('mongodb');
const {MongoClient, ObjectId} = mongodb;

// const assert = require('assert');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
  // assert.equal(null, error);
  if(error) return console.log('Unable to connect to database!', error);
  const db = client.db(databaseName);

  db.collection('tasks').deleteOne({
    description: 'Grocery shopping'
  })
  .then(result=> console.log(result))
  .catch(error=> console.log(error))
  // db.collection('tasks').updateMany({
  //   completed:false
  // }, {
  //   $set: {completed:true}
  // })
  // .then(result=>console.log(result))
  // .catch(error=>console.log(error));

  // db.collection('users')
  // .updateOne({
  //   _id: new ObjectId('5e34f6ff9d8a4542fc9f868f')
  // }, {
  //     // $set: {
  //     //   name: 'Jing'
  //     // }
  //     $inc: {
  //       age: 1
  //     }
  // })
  // .then((result)=>{
  //   console.log(result);
  // }).catch(error => console.log(error))
  // db.collection('users').findOne({name: 'Sabira'}, (error, user)=>{

  //   if(error) return console.log('Error: ', error);
  //   console.log(user);
  // })

  // db.collection('tasks').findOne({ _id: new ObjectId('5e35bac4a415bd43934171c5')}, (error, task)=>{
  //   if(error) return console.log('Error: ', error);
  //   console.log('Last task: ', task)
  // })

  // db.collection('tasks').find({completed: false }).toArray((error, tasks)=>{
  //   if(error) return console.log('error: ', error);
  //   console.log('Not completed tasks: ', tasks);
  // })

  // db.collection('tasks').find({ completed: true }).count((error, count) => {
  //   if (error) return console.log('error: ', error);
  //   console.log('here')
  //   console.log(count);
  // })

  // db.collection('users').insertOne({
  //   name: 'Sabira',
  //   age: 27,
  // }, (error, result) => {
  //   if(error) return console.log('unable to insert user');
  //   console.log(result.ops)
  // })
  // db.collection('users').insertMany([
  //   {
  //     name: 'Tim',
  //     age: 25
  //   },
  //   {
  //     name: 'Alina',
  //     age: 23,
  //   }
  // ], (error, result) => {
  //   if(error) return console.log('Error: ', error);
  //   console.log(result.ops)
  // })
//   db.collection('tasks').insertMany([
//     { description: 'Grocery shopping',
//       completed: true,
//     },
//     {
//       description: 'Complete Andrew Course',
//       completed: false
//     },
//     {
//       description: 'fly drone',
//       completed: false
//     }
// ], (error, result)=>{
//   if(error) return console.log('Error: ', error);
//   console.log(result.ops);
// })
})
