import { useCallback, useEffect, useState } from 'react'
import { useCurrencyLister } from './hooks';
import { InputField } from './components';

function App() {
  const [amountToBeConverted, setAmountToBeConverted] = useState(0);
  const [amountConverted, setAmountConverted] = useState(0);

  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const data = useCurrencyLister(from);
  const options = Object.keys(data);

  useEffect(() => {
    setAmountConverted(data[to] * amountToBeConverted);
  }, [amountToBeConverted, data, to]);

  const Swap = useCallback(()=>{
    setFrom(to);
    setTo(from);
  }, [from, to]);

  return (
    <div className='w-screen h-screen bg-[url(https://static.vecteezy.com/system/resources/previews/048/457/783/non_2x/currency-converter-currency-exchange-rate-dollars-to-euro-currency-trading-flat-icon-illustration-vector.jpg)]
    bg-cover bg-no-repeat'>
      <div>
        <form>
          <InputField label="For" amount={amountToBeConverted} isAmountDisabled={false} isCurrencyDisabled={false}
            currencyOptions={options} onAmountChange={setAmountToBeConverted} onCurrencyChange={setFrom}
            currency={from} />
            <button type="button" onClick={Swap}>Swap</button>
          <InputField label="To" amount={amountConverted} isAmountDisabled={true} isCurrencyDisabled={false}
            currencyOptions={options} onAmountChange={setAmountConverted} onCurrencyChange={setTo}
            currency={to} />
        </form>
      </div>
    </div>
  )
}

export default App
