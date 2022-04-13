const getRandomID = async (arr) => {
    const randomID = Math.floor(Math.random() * arr.length);
    return randomID;
}

module.exports = getRandomID;