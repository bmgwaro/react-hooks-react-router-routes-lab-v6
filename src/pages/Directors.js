import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; 

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/directors')
      .then((response) => response.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar /> 
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;