import React from "react";
import { useState } from "react";
export function Friend({
    fname,
    lname,
    image,
    balance,
    email,
    onSetMyBalance,
    myBalance
})
{
    const [friendBalance,setFriendBalance]=useState(+balance)
    const [amount,setAmount]=useState("")
    let selectedAmount=Number(amount)
    function transfer(amount){
        if(+myBalance>0){
            onSetMyBalance(balance=>+balance -amount);
            setFriendBalance(prevBalance=>+prevBalance+amount)
            
        }
        else{
            alert("You're out of money ! you need to buy stocks" )
        }
    }
    function borrow(amount){
        if(friendBalance){
            onSetMyBalance(balance=>+balance+amount)
            setFriendBalance(prevBalance=>+prevBalance-amount)
        }
        else{
            alert("Your friend is out of money!");
        }
    }

    function handleClick (e) {
        const {name}=e.target
        switch(name){
            case "transfer": 
            if(selectedAmount<=myBalance)
             transfer(selectedAmount);
            else
            alert("You 're out of money ! you need to buy some stocks.")
                 break;
            case "borrow": 
            if (selectedAmount<=friendBalance) 
             borrow(selectedAmount);
             else
             alert("Your friend is out of money!");
                break;
            default:
                console.log("err")
        }
        
    }
    function handleChange(e){
        setAmount(e.target.value)
    }
    return (
        <div className="card">
            <img className="img" src={image} alt="name" />
            <div className="container">
                <h3>
                    Name : {fname} {lname}
                </h3>
                <p>balance : ${friendBalance}</p>
                <p>Email : {email}</p>
                <select className="submit" value={amount} onChange={handleChange}>
                    <option value="10">$10</option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                </select>
                <button className="submit" name="borrow" onClick={handleClick}> Borrow</button>
                <button className="submit" name="transfer" onClick={handleClick}> Transfer</button>
            </div>
        </div>
    );
}
