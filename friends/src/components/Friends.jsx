import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {axiosWithAuth} from './authRouter'
import Friend from './Friend'


const Friends = (props) => {
    const [friends, setFriends] = useState()
    

    useEffect(() => {
         const url =
      "http://localhost:5000/api/friends";
    axiosWithAuth()
      .get(url)
      .then(response => {
        setFriends(response.data)
        console.log("res data",response.data)
      })
      .catch(e => {
        console.log(e.response);
      });
    }, []) 
        


    console.log("state data", friends)
    return ( 
        <div>
            {friends ? (
                friends.map(friend => (
                <>
                    <h4>Name: {friend.name}</h4>
                    <h4>Email: {friend.email}</h4>
                    <h4>Age: {friend.age}</h4>
                </>
                ))
            ) : (
                <h1> Loading, please wait</h1>
            )}
        
        <Friend setFriends={setFriends}/>
            
        </div>
     );
}
 
export default Friends