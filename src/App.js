import './App.css';
import Card from './components/cards/Card';

import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card/>
    </div>
  );
}

export default App;
