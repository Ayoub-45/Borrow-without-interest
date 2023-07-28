import React from "react";
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

    console.log(myBalance)
    function transfer(){
        if(+myBalance>0){
            onSetMyBalance(balance=>+balance -10)
            
        }
        else{
            alert("You're out of money ! you need to buy stocks" )
        }
    }
    function borrow(){

        onSetMyBalance(balance=>+balance+10)
    }
    function handleClick (e) {
        const {name}=e.target
        switch(name){
            case "transfer": transfer();
                 break;
            case "borrow": borrow();
                break;
            default:
                console.log("err")
        }
        
    }
    return (
        <div className="card">
            <img className="img" src={image} alt="name" />
            <div className="container">
                <h3>
                    Name : {fname} {lname}
                </h3>
                <p>balance : ${balance}</p>
                <p>Email : {email}</p>
                <button className="submit" name="transfer" onClick={handleClick}>Transfer</button>
                <button className="submit" name="borrow" onClick={handleClick}> Borrow</button>
            </div>
        </div>
    );
}
