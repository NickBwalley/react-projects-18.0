import { useState } from "react";
import "./App.css";

function App() {
  const [statement, setStatement] = useState("");
  const [amount, setAmount] = useState("");
  const [statementType, setStatementType] = useState("income");

  return (
    <main>
      <div>
        {statementType}
        <button onClick={() => setStatementType("expense")}>Clear</button>
        <h1 className="total-text success">0</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Income or Expense"
            onChange={(e) => {
              setStatement(e.target.value);
            }}
            value={statement}
          />
          <input
            type="number"
            placeholder="$5000"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
          <select
            onChange={(e) => {
              setStatementType(e.target.value);
            }}
            value={statementType}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
        <div>
          <div className="card">
            <div className="card-info">
              <h4>Salary</h4>
              <p>July 27th, 2024</p>
            </div>
            <p className="amount-text success">+$5000</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
