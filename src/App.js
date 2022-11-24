import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
		<NavBar />
		<About />
		<Project />
    </div>
  );
}

export default App;
