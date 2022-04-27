import { useState } from "react";

const Header = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
}

const Feedback = ({text, handler}) => {
    return (
        <div>
            <button onClick={handler}>
                {text}
            </button>
        </div>
    );
}

const DisplayFeedback = ({text, counter}) => {
    return (
        <div>
            <p>
                {text} {counter}
            </p>
        </div>
    );
}

const Statistics = ({counters}) => {
    let good, neutral, bad, all;
    [good, neutral, bad] = counters;
    all = good + neutral + bad;
    if (all === 0) return (<div>No feedback given</div>);
    return (
        <div>
            <DisplayFeedback text={"good"} counter={good} />
            <DisplayFeedback text={"neutral"} counter={neutral} />
            <DisplayFeedback text={"bad"} counter={bad} />
            <DisplayFeedback text={"all"} counter={all} />
            <DisplayFeedback text={"average"} counter={(good - bad) / all} />
            <DisplayFeedback text={"positive"} counter={good*100 / all + " %"} />
        </div>
    );
}

const App = () => {
    const [good, incGood] = useState(0);
    const [neutral, incNeutral] = useState(0);
    const [bad, incBad] = useState(0);

    const addGood = () => {
        incGood(good + 1);
    }

    const addNeutral = () => {
        incNeutral(neutral + 1);
    }

    const addBad = () => {
        incBad(bad + 1);
    }

    return (
        <div>
            <Header text={"Give feedback"} />

            <Feedback text={"good"} handler={addGood} />
            <Feedback text={"neutral"} handler={addNeutral} />
            <Feedback text={"bad"} handler={addBad} />

            <Header text={"Statistics"} />

            <Statistics counters={[good, neutral, bad]} />
        </div>
    );
}

export default App;