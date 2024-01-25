
import './App.css';
import Accordian from './components/accordian';
import Imageslider from './components/imageslider';
import Loadmore from './components/loadmore';
import StarRating from './components/star';

function App() {
  return (
    <div className="App">
      <Accordian /> 
       <StarRating /> 
    <Imageslider  url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/>
      <Loadmore />
    </div>
  );
}

export default App;
