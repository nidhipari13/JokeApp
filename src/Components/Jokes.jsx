import { useState } from "react";
import Button from "./Button"
import '../style/joke.css'

const Jokes = () => {
  const [joke,setJoke] = useState("");

  const fetchApi = () =>{
            fetch("https://v2.jokeapi.dev/joke/Programming?type=single")

          .then((res) => res.json())
          .then((data) => setJoke(data.joke));
  };

  return (
    <div className="joke">
      <Button callApi = {fetchApi} />
      <p>{joke}</p>
    </div>
  )
}

export default Jokes
