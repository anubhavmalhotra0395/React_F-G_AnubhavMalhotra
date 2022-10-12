import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Thanks from './components/Thanks';
import Home from './components/Home';
import Data from './components/Data';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/thanks' element={<Thanks />}/>
        <Route path='/data' element={<Data />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
