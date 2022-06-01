import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [advice,setAdvice] = useState('');

  const getAdvice = () => {
    axios.get('https://api.quotable.io/random')
    .then((res) => {
      setAdvice('');
      console.log(res.data);
      setAdvice(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAdvice();
  },[])

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice.content}</h1>
        <button className="button" onClick={() => getAdvice()}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
