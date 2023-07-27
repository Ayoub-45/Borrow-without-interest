import React from "react";
import { Card } from "./Card";
import { initialFriends } from "../initialFriends";
export function ListFriends(){
    return(
        <div className="container-cards" >
            {initialFriends.map(friend=>{
                return <Card key={friend.id} image={friend.image} name={friend.name} balance={friend.balance}/>
            })}
        </div> 
    )

}