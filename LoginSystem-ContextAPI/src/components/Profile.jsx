// to display
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

  const {user} = useContext(UserContext);
  console.log('user-profile',user);
  
  if (!user) {
    return (<div className="text-2xl text-center bg-gray-900 text-red-800">please login</div>)
  }else{
    return (<div className="text-2xl text-center bg-gray-100 text-gray-800">Welcome {user.username}</div>)
  }
}

export default Profile;