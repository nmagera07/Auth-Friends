import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {axiosWithAuth} from './authRouter'
import Friend from './Friend'
import { Card, Icon, } from 'semantic-ui-react'


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
        
    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    console.log("state data", friends)
    return ( 
        <div className="friends">
            <div className="friend-list">
            {friends ? (
                friends.map(friend => (
                <Card>
                    <Card.Content>
                   <Card.Header><p>Name: {friend.name}</p></Card.Header>
                   <Card.Description>
                    <p>Email: {friend.email}</p>
                    <p>Age: {friend.age}</p>
                    </Card.Description>
                    </Card.Content>
                </Card>
                ))
            ) : (
                <h3> Loading, please wait</h3>
            )}
        </div>
        <Friend setFriends={setFriends}/>
            <button onClick={logout}>Logout</button>
        </div>
     );
}
 
export default Friends