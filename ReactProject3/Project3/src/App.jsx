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
    <div className='w-screen h-screen bg-gray-500
    bg-cover bg-no-repeat flex flex-col justify-evenly content-center flex-wrap'>
      <h1 className='text-4xl font-serif font-black text-center uppercase'>Currency Converter</h1>
      <div className="sm:w-[50%] max-sm:w-2xl h-[40%] bg-black opacity-50 text-white rounded-4xl flex flex-col justify-between">
          <InputField label="For" amount={amountToBeConverted} isAmountDisabled={false} isCurrencyDisabled={false}
            currencyOptions={options} onAmountChange={setAmountToBeConverted} onCurrencyChange={setFrom}
            currency={from} className='rounded-t-4xl'/>
            <button type="button" onClick={Swap} className='bg-amber-300 text-black font-serif font-black hover:bg-amber-200'>Swap</button>
          <InputField label="To" amount={amountConverted} isAmountDisabled={true} isCurrencyDisabled={false}
           currencyOptions={options} onAmountChange={setAmountConverted} onCurrencyChange={setTo}
            currency={to} className='rounded-b-4xl'/>
      </div>
    </div>
  )
}

export default App
