const { getAllDataDB, getUsersByIdDB ,createUserDB,updateUserDB} = require('../repository/user.repository')

async function getAllData() {
    const data = await getAllDataDB();
    return data;
};

async function getUsersById(id) {
    const data = await getUsersByIdDB(id);
    return data;
};

async function createUser(birth, city, age, name, surname){
    const data=await createUserDB(birth, city, age, name, surname)
    return data;
}

async function updateUser(birth, city, age, name, surname) {
    const data = await updateUserDB(birth, city, age, name, surname)
    return data;
}

module.exports = { getAllData, getUsersById,createUser,updateUser };