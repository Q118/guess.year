const axios = require('axios');

const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
    
}



module.exports = getUsers;