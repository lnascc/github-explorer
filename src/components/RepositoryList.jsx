import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from "react";


export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => { // dois parametros, o primeiro é a função que será executada e o segundo é quando será executada.
    fetch('https://api.github.com/users/lnascc/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []) 

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} /> 
        })}
          
      </ul>
    </section>
  )
}