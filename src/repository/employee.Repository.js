const Person =  require("../models/Person.Model.js");



exports.createEmployeeRepository = async (body) => {
    console.log("createEmployeeRepository");

    const {firstName, secondName, surname, dateOfBirth, age, idGender} = body;
     const result = await Person.create({
         firstName,
         secondName,
         surname,
         dateOfBirth,
         age,
         idGender
     })
     console.log(result)
     return result;

}