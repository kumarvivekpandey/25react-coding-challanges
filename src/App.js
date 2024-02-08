
import './App.css';
import menus from "./components/tree/data";
import Accordian from './components/accordian';
import Imageslider from './components/imageslider';
import LightDarkmode from './components/light-darkmode';
import Loadmore from './components/loadmore';
import StarRating from './components/star';
import TreeView from './components/tree';
import QrCodeGenerator from './components/qr-code-generator';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import SearchAutocomplete from './components/search-autocomplete';
import TicTacToe from './components/Tic-tac-toe';
import UseFetchHook from './components/use-fetch/test';
import ScrollTopBottom from './components/scrolltotopand bottom';
import Weather from './components/weatherapp';


function App() {
  
  return (
    <div className="App">
         {/* <Accordian /> 
       <center> <StarRating /> 
    <Imageslider  url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} />
      <Loadmore />  
      <LightDarkmode /></center>
      <TreeView  menus={menus}/>
      <br />
      <QrCodeGenerator />

      <ScrollIndicator url={'https://dummyjson.com/products'} /> 
      <TabTest /> 
    <center>  <ModalTest /> 
      <SearchAutocomplete /></center>
      <TicTacToe />
      <center><UseFetchHook /></center>
      <ScrollTopBottom /> */}

      <Weather />
    </div>
  );
}

export default App;
