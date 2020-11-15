import {useState} from 'react';
import Lottie from 'react-lottie';

import animationData from './animation.json';

import './global.css';

function App() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <div className="containerAnimtion">
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
      </div>
    </div>
  );
}

export default App;
