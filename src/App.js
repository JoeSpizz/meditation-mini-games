import { motion } from 'framer-motion';
import './App.css';

function App() {
  function random (){ 
    let rand = (Math.random())*1000/2
    console.log(rand)
    return rand}
 
  return (
    <div className="App">
      
     <motion.h1 whileHover= {{scale: 1.5}} >Welcome to a Relaxing Series of Mini Games</motion.h1>
     <motion.div className='box' drag></motion.div>
     <motion.div className='box' animate={{x:[random(), random(), random(), random()], y:[50, 150, 200]}}></motion.div>
     <motion.div className='box' animate={{rotate: [random(), random(), random()]}}></motion.div>
    </div>
  );
}

export default App;
