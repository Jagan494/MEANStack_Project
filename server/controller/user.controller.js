users = [];

async function insert(user){
    console.log('Saving the data')
    users.push(user);
    return user;
}

module.exports = insert;