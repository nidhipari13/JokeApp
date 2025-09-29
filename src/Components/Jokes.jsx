import { useState } from "react";
import Button from "./Button";
import '../style/joke.css';

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        if (data.type === "single") setJoke(data.joke);
        else if (data.type === "twopart") setJoke(`${data.setup} ... ${data.delivery}`);
        else setJoke("No joke found.");
      })
      .catch(() => setJoke("Failed to fetch joke. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="joke">
      <Button callApi={fetchApi} loading={loading} />
      <p>{joke}</p>
    </div>
  );
};

export default Jokes;
