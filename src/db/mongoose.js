const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowerCase: true,
    validate(value){
      if(!validator.isEmail(value)) throw new Error('Email is invalid');
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value){
      if(value<0) throw new Error('Age must be a positive number');
    }
  }
})

const me = new User({
  name: 'Sabira',
  email: 'sabira@',
  age: 27
})

me.save()
.then(me=> console.log(me))
.catch(err=> console.log('Error', err))


const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  }
})

// const task = new Task({
//   description: 'grocery shopping',
//   completed: true
// })

// task.save()
// .then(task=> console.log(task))
// .catch(err=> console.log(err))
