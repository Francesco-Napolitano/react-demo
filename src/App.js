import logo from './logo.svg'
import './App.css'
import MainComponent from './components/MainComponent'
import ClassComponent from './components/ClassComponent'

const myName = 'Franco'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PROGETTO REACT DI {myName}</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <MainComponent student="Francesco" color="red" />
        <MainComponent student="Bambimo" color="blue" />
        <MainComponent student="Davide" color="green" />
        <ClassComponent />
      </main>
    </div>
  )
}

export default App
