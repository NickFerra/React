import './App.css';
import Article from './components/Article.js';
import A from './A.jpg';
import B from './B.jpg';

function App() {
  return (
    <div>
      <div className = "boxHold">
        <Article alph = "A" image = {A}/>
        <Article alph = "B" image = {B}/> 
      </div>
    </div>
  );
}




export default App;
