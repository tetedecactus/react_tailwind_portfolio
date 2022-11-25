import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Project from './components/Project';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
		<NavBar />
		<SocialIcons />
		<About />
		<Project />
    </div>
  );
}

export default App;
