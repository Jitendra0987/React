import { useState } from "react";

const About = () => {

  function Counter() {
    
    const [count, setCount] = useState(0);

  
    const increment = () => {
      setCount(prevCount => prevCount + 10);
    };

  
    const decrement = () => {
      setCount(prevCount => prevCount - 10);
    };

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment by 10</button>
        <button onClick={decrement}>Decrement by 10</button>
      </div>
    );
  }

  return (
    <>
      <h2>About Page</h2>
      {/* Call the Counter component here */}
      <Counter />
    </>
  );
};

export default About;
