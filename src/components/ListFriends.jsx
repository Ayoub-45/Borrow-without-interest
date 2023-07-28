import React from "react";
import { Friend } from "./Friend";
export function ListFriends({ filteredFriends,onSetMyBalance,myBalance }) {
   
    return (
        <div className="container-cards">
            {filteredFriends.map((friend) => {
                return (
                    <Friend
                        key={friend.id}
                        image={friend.image}
                        fname={friend.fname}
                        lname={friend.lname}
                        balance={friend.balance}
                        email={friend.email}
                        onSetMyBalance={onSetMyBalance}
                        myBalance={myBalance}
                    />
                );
            })}
        </div>
    );
}
