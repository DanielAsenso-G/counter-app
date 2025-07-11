import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)
  return (
    <>
    <div>
      <h1>This is a counter.</h1>
      <h1>{counter}</h1>
      <Button onClick={increment} variant="primary">+</Button>
      <Button onClick={decrement} variant="danger">-</Button>
      <br/>
      <Button onClick={reset} variant="success">Reset</Button>
    </div>
    </>
  )
}

export default Counter
