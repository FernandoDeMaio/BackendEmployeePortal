import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Person.model.js';

async function main(){

    try {
        //Start DB conetion
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        //Server Start
        app.listen(3000);
        console.log("Server is listening on port: ", 3000);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();
