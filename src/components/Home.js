import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const RedirectViewMore = () => {
        navigate("/Info")
    }
    return (
        <body>
            <div className = "container">
                <h1>Hi, my name is</h1>
                <h1>Lekeiciah.</h1>
            </div>

            <div>
                <button onClick={RedirectViewMore}>View More</button>
            </div>
        </body>
    )
}
export default Home;


