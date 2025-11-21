const { useState, useMemo } = React;

export function CurrencyConverter() {

  const coins = ["USD", "EUR", "GBP", "JPY"];

  const coinsObj = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.78,
    "JPY": 156.7    
  }

  const [inputNumber, setInputNumber] = useState();

  // const [coin, set];
  const [coin, setCoin] = useState();

  // function onChange()

  console.log(inputNumber);
  
  return (
    <form action="" style={{display: "flex", flexDirection: "column"}}>
      <h1>Currency Converter</h1>
      <label htmlFor="input-number">USD to EUR Conversion</label>
      <input type="number" autoFocus name="input-number" onChange={(e) => setInputNumber(e.target.value)}/>
      <label htmlFor="Start Currency">Start Currency:</label>
      <select name="Start Currency" id="">
        {/* {coins.map((c) => 
          <option value={c}>{c}</option>
        )} */}
        {/* {
          <option value={coinsObj.key}></option>
        } */}
      </select>
      <label htmlFor="Target Currency">Target Currency:</label>
      <select name="Target Currency" id="">
        {coins.map((c) => 
          <option>{c}</option>
        )}
      </select>
      <p>Converted Amount: {inputNumber}{coin}</p>
    </form>
  );

}