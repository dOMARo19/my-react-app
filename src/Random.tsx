import React, { useState } from 'react'
import { randomizer } from './randomizer.ts'

interface RandomProps {
  min: number;
  max: number;
}

const Random: React.FC<RandomProps> = ({ min, max }) => {
  const [num, setNum] = useState(randomizer())

  const changeNum= () => {
    setNum(randomizer())
  }
  return (
    <div>
    <div>{num}</div>
    <button onClick={changeNum}>Change</button>
    </div>
  )
}

export default Random

