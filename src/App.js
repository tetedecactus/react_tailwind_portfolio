import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
	<Router>
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/projects" element={<ProjectPage />} />
			</Routes>
		</div>
	</Router>
  );
}

export default App;
