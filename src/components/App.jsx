import React ,{useState} from "react"
import { FormAddFriend } from "./FormAddFriend"
import { Search } from "./Search"
import {initialFriends} from "../initialFriends"
import { MyBalance } from "./MyBalance"
export function  App(){
    const [myBalance,setMyBalance]=useState(30000);
    const [friends,setFriends]=useState(initialFriends);
    return (
        <div>
        <MyBalance balance={myBalance}/>
        <h1 className="heading">Borrow without Interest</h1>
        
        <div className="app">
            <div className="container-cards">
           <Search  friends={friends} onSetMyBalance={setMyBalance} myBalance={myBalance}/>
            </div>
        </div>
        <FormAddFriend onSetFriends={setFriends}/>
        </div>
    )
}