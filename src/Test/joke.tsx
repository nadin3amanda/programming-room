import React, {useState, useEffect} from "react";

const Joke = () => {
  const [ joke, setJoke ] = useState('Random Joke loading ...');
  useEffect(() => {fetch('https://v2.jokeapi.dev/joke/programming?idRange=0-100').then(response => response.json())
      .then(data => setJoke(data.joke))
  }, [])
  return (<div>{ joke }</div>)

}


export default Joke;