import React from "react";
import User from "./User";
export default function UserList(props) {
  return props.Users.map((Users, i) => {
    return(
    <User Users={Users} key={i}
    index ={i}
    removeUser={props.removeUser}
    />
    );
  });
}
