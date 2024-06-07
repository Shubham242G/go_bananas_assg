import Weather from './components/weather/Weather';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Dogs from './components/dogs/Dogs';
import DogInfo from './components/dogs/dogcard/doginfo/DogInfo';
import Error from './components/Error';
function App(){ 
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/dogs' element={<Dogs/>}/>
      <Route path='/dogs/:name' element={<DogInfo/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
