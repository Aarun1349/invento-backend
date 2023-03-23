const app = require("./app");
const connectToDatabase = require("./database/db");
const dotEnv = require("dotenv");

// Setting up config file
dotEnv.config({ path: "./config/.env" });

connectToDatabase();

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Server listening on port ${process.env.PORT}  in ${process.env.NODE_ENV}`
  );
});
