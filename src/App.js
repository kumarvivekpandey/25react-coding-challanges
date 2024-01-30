
import './App.css';
import menus from "./components/tree/data";
import Accordian from './components/accordian';
import Imageslider from './components/imageslider';
import LightDarkmode from './components/light-darkmode';
import Loadmore from './components/loadmore';
import StarRating from './components/star';
import TreeView from './components/tree';


function App() {
  return (
    <div className="App">
        <Accordian /> 
       <center> <StarRating /> 
    <Imageslider  url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/>
      <Loadmore />  
      <LightDarkmode /></center>
      <TreeView  menus={menus}/>
    </div>
  );
}

export default App;
