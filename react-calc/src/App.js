import './App.css';

function App() {
  return (
    <div className="calcGrid">
      <div className="output">
        <div className="prevOperand"></div>
        <div className="currentOperand"></div>
      </div>
      <button className="twoSpan">AC</button>
      <button>Clear</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>×</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="twoSpan">=</button>
    </div>
  );
}

export default App;
