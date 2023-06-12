import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../UserService";
import UserForm from "./UserForm"

function Update() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })


    useEffect(() => {
        getUser(id).then(response => {
            setUser(response.data);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(oldUser => ({
            ...oldUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(id, user).then(() => {
            navigate("/users");
        });
    };

    return (
        <UserForm
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formTitle="Edit User"
            buttonLabel="Update"
            placeholders={{
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || ""
            }}
        />
    );
}

export default Update;