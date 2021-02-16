import './App.css';
import B from './B.jpg';
import A from './A.jpg';

function App() {
  return (
    <div>
      <div className = "boxHold">
        <Article />
      </div>
    </div>
    
  );
}


const Article = (props) =>{
  return(
    <div className = "image">
      <img src = {A} />
      <img src = {B} /> 
      
    </div>
  )
}


export default App;
