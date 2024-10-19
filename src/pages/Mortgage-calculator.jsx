
import { useState } from 'react';

import '../style/Calculator.css'; 
const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <>
  
      <main className="main">
        <h1>Mortgage Calculator</h1>
        <div className="form">
          <input
            type="number"
            placeholder="Loan Amount"
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <input
            type="number"
            placeholder="Interest Rate"
            onChange={(e) => setRate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Loan Term (years)"
            onChange={(e) => setYears(e.target.value)}
          />
          <button onClick={calculateMortgage}>Calculate</button>
        </div>
        <p>Monthly Payment: ${monthlyPayment}</p>
      </main>
      
    </>
  );
};

export default MortgageCalculator;
