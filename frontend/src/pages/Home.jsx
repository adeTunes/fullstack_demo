import React from "react";
import { useNavigate } from "react-router-dom";

function Home({user, setUser}) {
  const navigate = useNavigate()
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <nav style={{display: "flex", justifyContent: "end"}}>
        <ul style={{listStyleType: "none"}}>
          <li style={{cursor: "pointer"}} onClick={() => {
            setUser(null)
            localStorage.removeItem("user")
          }}>Sign out</li>
        </ul>
      </nav>
      <div style={{flex: 1}}>
        <h1>Welcome Home {user.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          maxime itaque exercitationem cupiditate harum possimus culpa quae
          deserunt, dolorem doloremque ipsa, sed deleniti asperiores, aliquid
          officiis voluptas minus totam veritatis. Architecto illum minima,
          perferendis delectus beatae voluptates repellendus suscipit excepturi
          unde temporibus quae qui atque, at minus dolor, necessitatibus
          molestiae.
        </p>
      </div>
    </div>
  );
}

export default Home;
