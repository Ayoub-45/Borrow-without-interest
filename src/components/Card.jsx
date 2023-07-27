import React from "react";
export function Card({ name, image, balance }) {
    return (
        <div className="card">
            <img className="img" src={image} alt="name" />
            <div className="container">
                <h3>Name: {name}</h3>
                <p>balance: ${balance}</p>
            </div>
        </div>
    );
}
