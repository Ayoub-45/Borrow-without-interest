import React from "react"
import { ListFriends } from "./ListFriends"
import { FormAddFriend } from "./FormAddFriend"
export function  App(){
    return (
        <div>
        <h1 className="heading">Borrow without Interest</h1>
        <div className="app">
            <div className="cards">
            <ListFriends/>
            </div>
        </div>
            <FormAddFriend/>
        </div>
    )
}