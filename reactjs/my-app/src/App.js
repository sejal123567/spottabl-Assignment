import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";



function App() {
  const users = [
    {
      username: "Sejal Mittal",
      
    },
  ];
  let [Users , setUsers] = useState(users);
  const addUser = (username,)=>
  {
          let newUser = [...Users];
          newUser.push({
            username:username,
           
            
          });
        setUsers(newUser);
  };
 const removeUser = (index) =>{
  let newUser = [...Users];
  newUser.splice(index,1);
  setUsers(newUser);
 };
  
  return (
    <>
      <Navbar />
      <div className="card my-4 mx-4">
        <div className="card-body">
          <h1>Customers Success Managers</h1>
          <SearchBar addUser = {addUser}/>
          <div className="my-4">
            <UserList Users={Users}
            removeUser={removeUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
