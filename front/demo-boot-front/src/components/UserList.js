import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../UserService";
import { Pagination } from 'react-bootstrap';

const itemsPerPage = 4;

function UserList() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
            <br />
            <br />
            <table className="table table-striped table-bordered rounded">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    onClick={() => editUser(user.id)}
                                    className="btn btn-primary"
                                >
                                    Edit
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
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Pagination>
                {[...Array(Math.ceil(users.length / itemsPerPage))].map((_, index) => (
                    <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2 shadow-sm p-3 mb-5" onClick={addUser}>Add user</button>
            </div>
        </div>
    );
}

export default UserList;