import React from "react";
import { Friend } from "./Friend";
export function ListFriends({friends}){
    return(
        <div className="container-cards" >
            {friends.map(friend=>{
                return <Friend key={friend.id} image={friend.image} fname={friend.fname} lname={friend.lname} balance={friend.balance} email={friend.email}/>
            })}
        </div> 
    )

}