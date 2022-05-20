import React from 'react'
export default function User(props) {
  return (
    <ol className="list-group ">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.Users.username}</div>
           
          </div>
          <span class=" my-2 me-3 end-0"><button
            onClick={() => {
              props.removeUser(props.index);
            }}>
            <ion-icon name="trash"></ion-icon>
          
          </button></span>
        </li>
      </ol>
  );
}
