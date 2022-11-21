const app = require ("./app.js");
const { sequelize } = require ("./database/database.js");

require ('./models/Person.Model.js');

async function main(){

    try {
        //Start DB conetion
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        //Server Start
        app.listen(app.get("port"));
        console.log(`Running on PORT --> http://localhost:${app.get("port")}`);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();
