import React , {useState}from 'react'

const About = () => {
 const [count, setCount] =  useState(0)

  return (
    <div>About Page Here
      <button onClick={() =>{setCount(count+1)}}>Click Me</button>
      <h3>{count}</h3>
    </div>
  )
}

export default About