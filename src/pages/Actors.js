import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; 

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/actors')
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar /> 
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;