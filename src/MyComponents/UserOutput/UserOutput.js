import React from 'react';

const UserOutput = ( props ) => {
  return (
    <div>
      <p>{props.children} and the username is : {props.username}</p>
    </div>
  )
};
export default UserOutput;