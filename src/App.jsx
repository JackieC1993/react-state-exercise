import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 5)
  }
  
  const handleDecrement = () =>{
    setCount(count - 2)
  }

  const handleMultiply = () => {
    setCount(count * 2)
  }

  const handleDivision = () => {
    setCount(count / 2)
  }

  return (
    <div className='App'>
      <p>The current count is {count}</p>
      <h1>Hit Me with the function</h1>
      <button onClick={handleIncrement}>+5</button>
      <button onClick={handleDecrement}>-2</button>
      <button onClick={handleMultiply}>*2</button>
      <button onClick={handleDivision}>/2</button>
    </div>
  )
}

export default App
