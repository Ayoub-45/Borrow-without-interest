import React ,{useState} from "react"
import { ListFriends } from "./ListFriends"
import { FormAddFriend } from "./FormAddFriend"
import { Input } from "./Input"
import {initialFriends} from "../initialFriends"
import { MyBalance } from "./MyBalance"
export function  App(){
    const [myBalance,setMyBalance]=useState(30000);
    const [friends,setFriends]=useState(initialFriends)
    return (
        <body>
        <MyBalance balance={myBalance}/>
        <h1 className="heading">Borrow without Interest</h1>
        
        <Input />
        <div className="app">
            <div className="container-cards">
            <ListFriends friends= {friends}/>
            </div>
        </div>
            <FormAddFriend  onSetFriend={setFriends}/>
        </body>
    )
}