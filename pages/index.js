import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>hello testing first</p>
      <div>Showing total count : {count} </div>
      <button onClick={() => setCount(count + 1)}>+ Count</button>
      <button onClick={() => setCount(count - 1)}>- Count</button>
    </>
  )
}
