import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <p>Hello Wolrd</p>

      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>

    </>
  )
}

export default App
