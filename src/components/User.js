import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_no: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`https://638458fd4ce192ac6054d38e.mockapi.io/dainikcrudapp/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container my-5 py-3">
            <div className="w-75 mx-auto border border-3 border-secondary rounded-3 py-4 px-4">
                <h2 className="text-center">View User</h2>
                <div className="d-flex justify-content-around">
                    <h2>User Id: {id}</h2>
                    <Link className="btn btn-primary p-10" to="/">Back To Home</Link>
                </div>
                <hr/>
                <ul className="list-group w-50 text-center">

                    <li className="list-group-item">name: {user.name}</li>
                    <li className="list-group-item">email: {user.email}</li>
                    <li className="list-group-item">phone no: {user.phone_no}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;