const mongoose = require("mongoose");
const connectToDatabase = () =>
  mongoose
    .connect(process.env.LOCAL_DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`Database connection established on ${con.connection.host}`);
    });

module.exports = connectToDatabase;
