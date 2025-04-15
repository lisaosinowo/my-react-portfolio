import { useState } from 'react'
import "./styles/styles.scss";
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App;
