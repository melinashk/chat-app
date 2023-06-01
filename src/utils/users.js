const users = []

//adduser, removeuser, getuser, getuserinroom


const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  //Validate the data
  if(!username || !room){
    return{
      error: 'Username and room are required!'
    }
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  //validate username
  if(existingUser){
    return{
      error: 'Username is in use!'
    }
  }

  //store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) =>  user.id === id)

  if(index !== -1){
    return users.splice(index, 1)[0]
  }
}

const  getUser = (id) => {
  return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}

// addUser({
//   id: 22,
//   username: 'Melina',
//   room: ' South Philly'
// })

// addUser({
//   id: 32,
//   username: 'Andrew',
//   room: 'Center City'
// })

// const user = getUser(22)
// console.log(user)


// const userList = getUserInRoom('home')
// console.log(userList)

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom
}