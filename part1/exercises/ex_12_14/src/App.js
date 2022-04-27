import {useState} from "react";

const Display = ({anecdotes, votes, index}) => {
    return (
        <div>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} votes</p>
        </div>
    );
}

const Button = ({text, handler}) => {
    return (
        <>
            <button onClick={handler}>
                {text}
            </button>
        </>
    );
}

const App = () => {
    const [selected, setSelected] = useState(0);
    const [votes, setVote] = useState([0,0,0,0,0,0,0]);
    const [winner, setWinner] = useState(undefined);

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ];

    const addVote = () => {
        const copy = [...votes];
        copy[selected]++;
        setWinner(copy.indexOf(Math.max(...copy)));
        setVote(copy);
    }

  return (
      <div>
          <h1>Anecdote of the day</h1>
          <Display anecdotes={anecdotes} votes={votes} index={selected} />
          <br/>
          <Button text={"vote"} handler={addVote} />
          <Button text={"Next Anecdote"} handler={() => setSelected(Math.floor(Math.random()*anecdotes.length))} />
          <br/>
          <h2>Anecdote with most votes</h2>
          <Display anecdotes={anecdotes} votes={votes} index={winner} />

      </div>
  );
}

export default App;
