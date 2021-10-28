import axios from "axios";
import { useState } from "react";
import ListRepo from "../ListRepo";
import "./style.css";

function SearchRepo({ repository, setRepository }) {
  const [search, setSearch] = useState("");
  const [repoNotFound, setRepoNotFound] = useState(false);

  const findRepo = () => {
    axios
      .get(`https://api.github.com/repos/${search}`)
      .then((res) => {
        setRepoNotFound(false);
        setRepository([...repository, res]);
      })
      .catch((err) => {
        setRepoNotFound(true);
        console.log(err);
      });
  };

  return (
    <>
      <div className="searchBox">
        <input
          value={search}
          type="text"
          onChange={(evt) => setSearch(evt.target.value)}
          placeholder="nome-do-usuario/repositório..."
        />

        <div>
          <button onClick={() => findRepo()}>Buscar</button>

          {repository.length !== 0 && (
            <button
              onClick={() => {
                setSearch("");
                setRepository([]);
                setRepoNotFound(false);
              }}
            >
              Limpar Busca
            </button>
          )}
        </div>
      </div>

      {repoNotFound && <p>Repositório não encontrado. Tente novamente</p>}

      <ListRepo repository={repository} />
    </>
  );
}

export default SearchRepo;
