import React, {useState} from 'react';
import './App.css';

function App() {
    const [counters, setCounters] = useState([1, 2, 3, 4, 5]);
    const addCounter = () => {
        const newCounter = [...counters]
        newCounter.push(0);
        setCounters(newCounter)
    }
    const deleteCounter = (index) => {
        const newCounter = counters.filter((el, i) =>
            i !== index)
        setCounters(newCounter)
    }

    const counterChange = (index, value) => {
        const newCounter = counters.map((el, i) => {
                if (i === index) return el + value
                return el
            }
        )
        setCounters(newCounter)
    }

    return (
        <div className="App">
            <button onClick={() => addCounter()}> add counter</button>
            {counters.map((el, i) => <div>
                <button onClick={() => counterChange(i, 1)}> +</button>
                {el}
                <button onClick={() => counterChange(i, -1)}> -</button>
                <button onClick={() => deleteCounter(i)}> delete</button>
            </div>)}
        </div>
    );
}

export default App;
