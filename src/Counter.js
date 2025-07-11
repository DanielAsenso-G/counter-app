import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';


const Counter = () => {

    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)
  return (
    <>
    <div className = "d-flex flex-column align-items-center vh-25">
    <TypeAnimation
        sequence={[
          'This is a counter.',
          1000,
          '',
          'React is fun!',
          1000,
          '',
          'Let’s count together!',
          1000
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
      />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>{counter}</h1>
      <div className="d-flex gap-2 justify-content-center" style={{ width: '200px' }}>
      <Button onClick={increment} variant="primary rounded-3">+</Button>
      <Button onClick={decrement} variant="danger rounded-3">-</Button>
      </div>
      <br/>
      <Button onClick={reset} variant="success ">Reset</Button>
    </div>
    </>
  )
}

export default Counter
