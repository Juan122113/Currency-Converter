const { useState, useMemo } = React;

export function CurrencyConverter() {

  // const coins = ["USD", "EUR", "GBP", "JPY"];

  const coinsObj = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.78,
    "JPY": 156.7    
  }

  let coinsObjKeys = Object.keys(coinsObj);
  let targCount;

  const [inputNumber, setInputNumber] = useState(1);

  // const [coin, set];
  const [startCurr, setStartCurr] = useState("USD");
  const [targCurr, setTargCurr] = useState("USD");

  // function onChange()

  console.log(inputNumber);

  function count() {
    let startCount = inputNumber * coinsObj[startCurr];
    targCount = startCount * coinsObj[targCurr];
    return targCount.toFixed(2);
  }

  const finalCount = useMemo(() =>count(), [startCurr]);

  console.log(coinsObj[startCurr]);
  
  return (
    <form action="" style={{display: "flex", flexDirection: "column"}}>
      <h1>Currency Converter</h1>
      <label htmlFor="input-number">{startCurr} to {targCurr} Conversion</label>
      <input type="number" autoFocus name="input-number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
      <label htmlFor="Start Currency">Start Currency:</label>
      <select name="Start Currency" id="" onChange={(e) => setStartCurr(e.target.value)}>
        {/* {coins.map((c) => 
          <option value={c}>{c}</option>
        )} */}
        {coinsObjKeys.map((c) => 
          <option value={c} key={c}>{c}</option>
        )}
        {/* {
          <option value={coinsObj.key}></option>
        } */}
      </select>
      <label htmlFor="Target Currency">Target Currency:</label>
      <select name="Target Currency" id="" onChange={(e) => setTargCurr(e.target.value)}>
        {/* {coins.map((c) => 
          <option>{c}</option>
        )} */}
        {coinsObjKeys.map((c) => 
          <option value={c} key={c}>{c}</option>
        )}
      </select>
      <p>Converted Amount: {count()} {targCurr}</p>
    </form>
  );

}