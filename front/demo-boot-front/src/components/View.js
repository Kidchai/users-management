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

        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <h3 class="card-title" style={{ marginBottom: "20px" }}>
                            User info</h3>
                        <div className="row" style={{ marginBottom: "6px" }}>
                            <div>
                                <mark>First name:</mark>{user.firstName}
                            </div>
                        </div>

                        <div className="row" style={{ marginBottom: "6px" }}>
                            <div>
                                <mark>Last name:</mark> {user.lastName}
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: "6px" }}>
                            <div>
                                <mark>Email:</mark>  {user.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;