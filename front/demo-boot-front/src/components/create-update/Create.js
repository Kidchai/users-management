import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, createUser } from "../../UserService";
import UserForm from "./UserForm"

function Create() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    useEffect(() => {
        if (id !== "_add") {
            getUser(id)
                .then((response) => {
                    const { firstName, lastName, email } = response.data;
                    setUser({ firstName, lastName, email });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(user).then(() => {
            navigate("/users");
        })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(oldUser => ({
            ...oldUser,
            [name]: value,
        }));
    };

    return (
        <UserForm
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formTitle="New User"
            buttonLabel="Save"
            placeholders={{
                firstName: "First name",
                lastName:  "Last name",
                email: "Email"
            }}
        />
    );
}

export default Create;