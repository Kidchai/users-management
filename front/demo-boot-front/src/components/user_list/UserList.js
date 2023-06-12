import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../../UserService";
import UserRow from './UserRow';
import UserPagination from './UserPagination';

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
                    {paginatedUsers.map((user) => (
                        <UserRow user={user} editUser={editUser} removeUser={removeUser} viewUser={viewUser} />
                    ))}
                </tbody>
            </table>
            <UserPagination currentPage={currentPage} handlePageChange={handlePageChange} totalUsers={users.length} itemsPerPage={itemsPerPage} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2 shadow-sm p-3 mb-5" onClick={addUser}>Add user</button>
            </div>
        </div>
    );
}

export default UserList;