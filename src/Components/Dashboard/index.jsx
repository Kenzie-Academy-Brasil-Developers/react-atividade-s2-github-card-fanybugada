import { useState } from "react";
import SearchRepo from "../SearchRepo";
import "./style.css";

function Dashboard() {
  const [repository, setRepository] = useState([]);

  return (
    <div className="containerPage">
      <div className="mainContainer">
        <h2>Busque o repositório desejado</h2>

        <SearchRepo repository={repository} setRepository={setRepository} />
      </div>
    </div>
  );
}

export default Dashboard;
