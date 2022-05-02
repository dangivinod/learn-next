import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>line first</p>

      <button onClick={() => setCount(count + 1)}>+ Count</button>
      <button onClick={() => setCount(count - 1)}>- Count</button>
    </>
  )
}
