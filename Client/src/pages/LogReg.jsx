import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import axios from 'axios';

const LogReg = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register",
            user)
            .then((res) => {
                console.log(res.data);
                setUser({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    };

    const login = (event) =>{
        event.preventDefault();
        // Need to send get request to get CSRF token
        // And then add to header with the key `X-CSRFToken`
        axios
            .post("http://localhost:8000/api/users/login",
            {
                email: email,
                password: password,
            })
            .then((res)=>{
                console.log(res, "res");
                console.log(res.data, "is res data!");
                navigate("/");
            })
            .catch((err)=>{
                console.log(err.response.data);
            });
    };



    return (
        <div>
            <Tabs.Root defaultValue="login" orientation="vertical">

                <Tabs.List aria-label="tabs example">

                    <Tabs.Trigger value="login">Login</Tabs.Trigger>

                    <Tabs.Trigger value="register">Register</Tabs.Trigger>

                </Tabs.List>

                <Tabs.Content value="login">
                    <form
                        onSubmit={login}>
                        <label for="email">Email</label>
                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <label for="email">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Sign In</button>
                    </form>

                </Tabs.Content>

                <Tabs.Content value="register">
                    <form
                        onSubmit={register}>
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
                        <label for="lastname">Last Name</label>
                        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
                        <label for="email">Email</label>
                        <input type="text" name="email" onChange={(e) => handleChange(e)} />
                        <label for="password">Password</label>
                        <input type="password" name="password" onChange={(e) => handleChange(e)} />
                        <label for="confirmpassword">Confirm Password</label>
                        <input name="confirmpassword" type="password" onChange={(e) => handleChange(e)} />
                        <button type="submit">Register</button>
                    </form>
                </Tabs.Content>

            </Tabs.Root>
        </div>
    );
};


export default LogReg;