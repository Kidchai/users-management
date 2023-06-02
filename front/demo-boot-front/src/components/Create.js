import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getUser, createUser, updateUser} from "../UserService";

function Create() {
    const navigate = useNavigate;
    const {id} = useParams;

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    useEffect(() => {
        if (id !== "_add") {
            getUser(id)
                .then(response => {
                    const {firstName, lastName, email} = response.data;
                    setUser({firstName, lastName, email});
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const saveOrUpdate = (user) => {
        user.preventDefault();
        if (id === "_add") {
            createUser(user).then(() => {
                navigate("/users");
            })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            updateUser(id, user).then(error => {
                console.log(error);
            });
        }
    };

    const handleChange = (user) => {
        const {name, value} = user.target;
        setUser(oldUser => ({
            ...oldUser,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        navigate("/users");
    };

    const getTitle = () => {
        if (id !== "_add")
            return <h3 className="text-center">Add</h3>;
        else
            return <h3 className="text-center">Update</h3>;
    };

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First name:</label>
                                    <input
                                        placeholder="First name"
                                        name="firstName"
                                        className="form-control"
                                        value={user.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        placeholder="Last name"
                                        name="lastName"
                                        className="form-control"
                                        value={user.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={saveOrUpdate}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleCancel}
                                    style={{marginLeft: "10px"}}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;