import React from "react";
export function MyBalance({balance}){
    return (
        <div className="balance">
            <h3>Ayoub Nasraoui</h3>
            <h3>Balance: $ {balance} </h3>
        </div>
    )
}