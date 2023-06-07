import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../UserService";
import { deleteUser } from "../UserService";

function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const removeUser = (id) => {
        deleteUser(id)
        .then(() => {
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        })
        .catch((error) => {
            console.error(error);
        });
      };

    const viewUser = (id) => {
        navigate(`/view/${id}`);
    };

    const editUser = (id) => {
        navigate(`/edit/${id}`);
    };

    const addUser = () => {
        navigate("/add/_add");
    };

    return (
        <div>
            <h3>Users</h3>
            <br />
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => editUser(user.id)}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => removeUser(user.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => viewUser(user.id)}
                                        className="btn btn-info"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={addUser}>
                    Add user
                </button>
            </div>
        </div>
    );
}

export default UserList;