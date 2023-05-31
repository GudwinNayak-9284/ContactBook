import { useState } from 'react'
import './App.css'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
const[usersList,setusersList]=useState([])

const addUserHandler=(userName,userAge)=>{
  setusersList((prevUserList)=>{
    return [...prevUserList,{name:userName,age:userAge,id:Math.random().toString()}]
  })

}
  return (
    <>
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={usersList}/>
    </>
  )
}

export default App
