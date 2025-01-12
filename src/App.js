import './App.css';
import {useState} from "react";
import "milligram"

function App() {
    const [title, setTitle]= useState('Wall-e');
    let message;
    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},];
    function handleChange(event){
        setTitle(event.target.value);
        if (title.length < 5) {
            message = "Tytuł jest za krótki. Nagrywają takie filmy?";}
        else if (title.length < 15) {
            message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";}
        else {
            message = "Tytuł jest za długi, nikt tego nie zapamięta.";}
    }
    function showMovie(){
        alert(title);
    }
    function displayMovie(){
    }
  return (
      <div className="App">
          <h1>My favorite movie to watch</h1>
          <div>
              <h2>Titles:</h2>
              <ul>
                  {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
              </ul>
          </div>
          <div>
              <h2>My favorite movie for today is: {title}</h2>
              {title.length > 0 && <div>{message}</div>}
              <input type="text" value={title} onChange={handleChange}/>
              <button onClick={showMovie}> Show Movie title </button>
          </div>
      </div>
  );
}

export default App;
