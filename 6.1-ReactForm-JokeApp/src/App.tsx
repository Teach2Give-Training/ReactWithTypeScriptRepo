import { useForm, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import './App.css'

type Joke = {
  id: number;
  joke: string;
  rate: number;
}

type JokeInput = {
  joke: string;
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([
    { id: 1, joke: "Why did the chicken cross the road? To get to the other side!", rate: 0 },
    { id: 2, joke: "Why don't scientists trust atoms? Because they make up everything!", rate: 0 }
  ]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<JokeInput>();

  const onSubmit: SubmitHandler<JokeInput> = (data) => {
    setJokes([
      ...jokes,
      { id: Date.now(), joke: data.joke, rate: 0 }
    ]);
    reset();
  };

  const increaseRate = (id: number) => {
    setJokes(jokes =>
      jokes.map(j =>
        j.id === id ? { ...j, rate: j.rate + 1 } : j
      )
    );
  };

  const decreaseRate = (id: number) => {
    setJokes(jokes =>
      jokes.map(j =>
        j.id === id ? { ...j, rate: j.rate - 1 } : j
      )
    );
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Joke App with React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 24 }}>
        <input
          {...register("joke", { required: "Joke is required", minLength: { value: 10, message: "Joke must be at least 10 characters" } })}
          placeholder="Enter your joke"
          style={{ padding: 8, width: "70%" }}
        />
        <button type="submit" style={{ marginLeft: 8, padding: 8 }}>Add Joke</button>
        {errors.joke && <div style={{ color: "red" }}>{errors.joke.message}</div>}
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {jokes.map(j => (
          <li key={j.id} style={{ marginBottom: 16, border: "1px solid #ccc", padding: 12, borderRadius: 6 }}>
            <div>{j.joke}</div>
            <div>
              <button onClick={() => increaseRate(j.id)} style={{ marginRight: 8 }}>👍</button>
              <button onClick={() => decreaseRate(j.id)} style={{ marginRight: 8 }}>👎</button>
              <span>Rating: {j.rate}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App