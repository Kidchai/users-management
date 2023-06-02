import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">
            <h1>Footer</h1>
                <div class="text-center p-4">
                    © 2023 Kidchai. All Rights Reserved
                </div>
            </footer>
        </div>
    );
}

export default Footer;