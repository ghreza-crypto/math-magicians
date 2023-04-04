import './Calculator.css';

const Calc = () => (
  <div className="calcContainer">
    <span className="result">0</span>
    <div className="row">
      <button type="button" className="btn">AC</button>
      <button type="button" className="btn">+/-</button>
      <button type="button" className="btn">%</button>
      <button type="button" className="btn btnLast">÷</button>
    </div>
    <div className="row">
      <button type="button" className="btn">7</button>
      <button type="button" className="btn">8</button>
      <button type="button" className="btn">9</button>
      <button type="button" className="btn btnLast">x</button>
    </div>
    <div className="row">
      <button type="button" className="btn">4</button>
      <button type="button" className="btn">5</button>
      <button type="button" className="btn">6</button>
      <button type="button" className="btn btnLast">-</button>
    </div>
    <div className="row">
      <button type="button" className="btn">1</button>
      <button type="button" className="btn">2</button>
      <button type="button" className="btn">3</button>
      <button type="button" className="btn btnLast">+</button>
    </div>
    <div className="row">
      <button type="button" className="btn zero">0</button>
      <button type="button" className="btn dot">.</button>
      <button type="button" className="btn btnLast">=</button>
    </div>
  </div>
);

export default Calc;
