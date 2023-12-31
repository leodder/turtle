import React, { useState } from 'react'

export default function AlternatingSumCalculator() {
  const [n, setN] = useState('')
  const [result, setResult] = useState('')

  const calculateAlternatingSum = () => {
    const num = parseInt(n)
    if (!isNaN(num)) {
      let sum = 0
      if (n % 2 === 0) {
        sum += n / 2 + 2
      } else if (n % 2 === 1) {
        sum += 0 - (n - 3) / 2
      }
      setResult(`您輸入的值: ${num}  總和: ${sum}`)
    } else {
      setResult('請輸入正整數')
    }
  }

  return (
    <div>
      <h1>Alternating Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter n"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={calculateAlternatingSum}>Calculate</button>
      <p>{result}</p>
    </div>
  )
}
