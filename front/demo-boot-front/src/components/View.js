import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../UserService";

const View = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(response => {
            setUser(response.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">User info</h3>
                <div className="card-body">
                    <div className="row">
                        <label>First name:</label>
                        <div>{user.firstName}</div>
                    </div>
                    <div className="row">
                        <label>Last name:</label>
                        <div>{user.lastName}</div>
                    </div>
                    <div className="row">
                        <label>Email:</label>
                        <div>{user.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;