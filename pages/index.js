import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Showing total count : {count} </div>
      <button onClick={() => setCount(count + 1)}>+ Count</button>
      <button onClick={() => setCount(count - 1)}>- Count</button>
    </>
  )
}
