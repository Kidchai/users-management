const UserRow = ({ user, editUser, removeUser, viewUser }) => {
    return (
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
    );
}

export default UserRow;