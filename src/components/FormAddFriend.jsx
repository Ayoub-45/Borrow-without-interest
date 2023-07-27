import React, { useState } from "react";
export function FormAddFriend({ onSetFriends }) {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
    const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");
    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "imageURL":
                setImageURL(value);
                break;
            case "balance":
                setBalance(value);
                break;
            default:
                console.log("err");
                break;
        }
    }
    function handleSubmit() {
        const id = crypto.randomUUID();
        if (!firstname || !lastname || !email || !imageURL || !balance) return;
        const friend = {
            id: id,
            fname: firstname,
            lname: lastname,
            email: email,
            image: `${imageURL}?=${id}`,
        };
        console.log("hello")
    }
    return (
        <form className="form" onSubmit={handleSubmit} >
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input
                    id="firstname"
                    name="firstName"
                    className="input"
                    type="text"
                    value={firstname}
                    onChange={handleChange}
                    placeholder=" "
                />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">
                    First name
                </label>
            </div>
            <div className="input-container ic2">
                <input
                    id="lastname"
                    name="lastName"
                    className="input"
                    type="text"
                    value={lastname}
                    onChange={handleChange}
                    placeholder=" "
                />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">
                    Last name
                </label>
            </div>
            <div className="input-container ic2">
                <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder=" "
                />
                <div class="cut cut-short"></div>
                <label
                    htmlFor="email"
                    name="email"
                    className="placeholder"
                    value={email}
                    onChange={handleChange}
                >
                    Email
                </label>
            </div>

          
            <div className="input-container ic2">
                <input
                    id="balance"
                    name="balance"
                    className="input"
                    value={balance}
                    onChange={handleChange}
                    type="text"
                    placeholder=" "
                />
                <div className="cut cut-short"></div>
                <label for="balance" className="placeholder">
                    Balance
                </label>
            </div>
            <div className="input-container ic2">
                <input
                    id="image-url"
                    name="imageURL"
                    className="input"
                    value={imageURL}
                    onChange={handleChange}
                    type="text"
                    placeholder=" "
                />
                <div className="cut cut-short"></div>
                <label htmlFor="Image-url" className="placeholder">
                    Image URL
                </label>
            </div>
            <button type="text" className="submit">
                submit
            </button>
        </form>
    );
}
