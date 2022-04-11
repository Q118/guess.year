const axios = require('axios').default;

async function getUser() {
    let res = await axios.get('http://webcode.me');

    let data = res.data;
    console.log(data);
    return data;
}

async function getSong() {
    let res = await axios.get();
}



module.exports = getUser