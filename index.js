const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Recipe.collection.drop()

// Recipe.insertMany( data ).then(res => {
//   res.forEach(el => {
//     console.log(el.title)
//   })
// }).catch(err => {
//   console.log(err)
// })

// Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
//   .then(data => {
//     console.log('Recipe successfully updated')
//   }).catch(err => {
//     console.log(err)
//   })

// Recipe.deleteOne({ title: 'Carrot Cake' })
//   .then(data => {
//     console.log(`Item successfully removed`)
//   })
//   .catch(err => {
//     console.log(err)
//   })


Recipe.countDocuments()
  .then(data => {
    console.log(data);
    mongoose.disconnect()
  })
  .catch(err => {
    console.log(err)
  })

// console.log('Before: ' + mongoose.connection.readyState)

// mongoose.connection.close(function () {
//   console.log('Mongoose default connection closed');
// });