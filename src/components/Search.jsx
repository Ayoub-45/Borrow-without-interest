import React, { useState } from "react";
import { ListFriends } from "./ListFriends";
export function Search({ friends ,onSetMyBalance,myBalance}) {
    console.log(myBalance)
    const [searchField, setSearchField] = useState("");

    const [searchShow, setSearchShow] = useState(true);
    const filteredFriends = friends.filter((friend) => {
        return (
            friend.fname.toLowerCase().includes(searchField.toLowerCase()) ||
            friend.email.toLowerCase().includes(searchField.toLowerCase())|| 
            friend.lname.toLowerCase().includes(searchField.toLowerCase())
        );
    });
    function handleChange(e) {
        if (e.target.value === "") {
            setSearchShow(false);
        } else {
            setSearchField(e.target.value);
            setSearchShow(true);
        }
    }
    function searchFriends() {
        if (searchShow) {
            return <ListFriends onSetMyBalance={onSetMyBalance} myBalance={myBalance} filteredFriends={filteredFriends} />;
        }
    }
    return (
        <div>
            <input
                type="text"
                placeholder="search for friend"
                className="input-container center "
                onChange={handleChange}
            />
            {searchFriends()}
        </div>
    );
}
