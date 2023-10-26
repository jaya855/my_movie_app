import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import './App.css';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/movie/:id" element={<SingleMovie/>}/>
     </Routes>
    </div>
  );
}

export default App;
