import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css'


const App = () => {
  return (
    <main>
        <div className='main' /*phenomenal looking background */> 
            <div className='gradient' /*gradient*//>
        </div>
        <div className='app'>
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App