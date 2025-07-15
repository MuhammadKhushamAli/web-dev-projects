import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState('');
  
  const passRef = useRef(null);

  const CopyPass = useCallback(()=>
  {
    passRef.current ? passRef.current.select():console.log(false);
    passRef.current.setSelectionRange(1, 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const PasswordGenerator = useCallback(() => {
  let passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let pass = '';

  if (isNumber) {
    passStr += "1234567890";
  }

  if (isCharacter) {
    passStr += "!@#$%^&*()[]{};':|,./<>?";
  }

  for (let i = 0; i < length; i++) {
    pass += passStr[Math.floor(Math.random() * (passStr.length))];
  }

  setPassword(pass);

}, [length, isNumber, isCharacter, setPassword]);

useEffect(()=> PasswordGenerator(), [length, isNumber, isCharacter]);

  return (
    <>
      <div className='bg-gray-900 w-[50%] m-auto rounded-full flex flex-col content-center flex-wrap mt-5 gap-8 p-[2%]'>
        <div>
          <input type="text" name="password" id="password" readOnly value={password}
            className='bg-white w-[80%] p-[2%] rounded-l-full'
            ref={passRef}/>
          <button type="button" className='text-white bg-red-600 w-[20%] p-[2%] rounded-r-full hover:bg-red-300'
          onClick={CopyPass}>Copy</button>
        </div>

        <div className='flex flex-row flex-wrap gap-2'>
          <input type="range" name="range" id="range" min={8} max={40} value={length}
            onChange={e => setLength(e.target.value)} />
          <label htmlFor="range" className='text-white'>Length: {length}</label>

          <input type="checkbox" name="number" id="number" defaultChecked={isNumber}
            onChange={() => setIsNumber((isNumber) => !isNumber)} />
          <label htmlFor="number" className='text-white'>Number</label>

          <input type="checkbox" name="special-character" id="special-character" defaultChecked={isCharacter} 
            onChange={() => setIsCharacter((isCharacter) => !isCharacter)} />
          <label htmlFor="special-character" className='text-white'>Special Character</label>
        </div>
      </div>
    </>
  )
}

export default App
