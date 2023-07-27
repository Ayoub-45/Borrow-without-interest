import React from "react";
export function Friend({ fname,lname, image, balance ,email }) {
    return (
        <div className="card">
            <img className="img" src={image} alt="name" />
            <div className="container">
                <h3>Name : {fname} {lname}</h3>
                <p>balance : ${balance}</p>
                <p>Email : {email}</p>
                <button className="submit">Transfer</button>
                <button className="submit">Borrow</button>
            </div>
        </div>
    );
}
