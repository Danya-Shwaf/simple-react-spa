import {useState} from "react";

function Home() {
    const [message,setMessage] = useState("Welcome to our site");

    const handelClick = () => setMessage("Thank you for Visiting");

    return(<div>
        <h2>Welcome</h2>
        <p>{message}</p>
        <button onClick={handelClick}> Click for a Warm Welcome</button>
    </div>
    );
}
export default Home;