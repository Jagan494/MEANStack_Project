users = [];
console.log('Saving the data')
async function insert(user){
    users.push(user);
    return user;
}

module.exports = {
    insert
};