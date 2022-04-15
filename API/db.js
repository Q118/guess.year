const axios = require('axios');

// post request to add user to db.json
const addUser = async (user) => {
    const response = await axios.post('http://localhost:3000/users', user);
    console.log(response.data + " added to db.json");
}

// const myUser = {
//     name: "John",
//     email: "hello@hi",
//     password: "123"
// };
//addUser(myUser);

module.exports = addUser;
