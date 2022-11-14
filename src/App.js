import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page1 from './pages/page1';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
