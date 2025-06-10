import type { Joke } from "../types/type";


interface JokeComponentProps {
  joke: Joke;
  increaseRates: (id: number) => void;
  decreaseRates: (id: number) => void;
}

export const JokeComponent: React.FC<JokeComponentProps> = ({ joke, increaseRates, decreaseRates }) => {
  return (
    <div className="joke">
            <div className="joke-text">{joke.joke}</div>
            <div className="rate">Rating : {joke.rate}</div>
            <div className="joke-buttons">
                <button className="btn btn-sm btn-success"
                    onClick={() => increaseRates(joke.id)}
                >👍</button>
                <button className="btn btn-sm btn-danger"
                    onClick={() => decreaseRates(joke.id)}
                >👎</button>
            </div>
        </div>
  )
}
