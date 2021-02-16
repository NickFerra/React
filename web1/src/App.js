import "./App.css";
import Article from "./components/Article1.js";
import A from "./A.jpg";
import B from "./B.jpg";
import C from "./C.jpg";
import D from "./D.jpg";
import E from "./E.jpg";
import F from "./F.jpg";

function App() {
  return (
    <div>
      <div className="boxHold">
        <Article alph="A" image={A} />
        <Article alph="B" image={B} />
        <Article alph="C" image={C} />
        <Article alph="D" image={D} />
        <Article alph="E" image={E} />
      </div>
      <div className="boxHold2">
      <Article alph="F" image={F} />
      </div>
    </div>
  );
}

export default App;
