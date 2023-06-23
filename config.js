const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://dvb402:dvb402@cluster0.2zo6pnc.mongodb.net/`; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
