import React, { useState } from 'react'
import {FaClipboard} from "react-icons/fa"
import { useForm } from './useForm'
import { Toaster, toast } from 'react-hot-toast'
import {getRandomChar, getSpecialChar} from "./utilis"
const App = () => {

  //toto su len nastavene hodnoty pre values
  const [values,setValues] = useForm({
    length:6,
    capital:true,
    small:true,
    number:true,
    symbol:true,

  });

  const [result, setResult] = useState("")

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65,90)
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97,122)
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48,57)
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar()
    },

  ]


  const handleOnSubmit = (e) =>{
    e.preventDefault()
    let generatedPassword = '';
    //toto nam dava iba tie fildy(capita,small,number,symbol)
    //ktore su zaznačene čiže zakliknute

    const checkedFields = fieldsArray.filter(({
      field}) => field)//ak je true tak vrať field a v checkedFields sa to uklada


    for(let i=0; i< values.length; i++){
      //toto nam da random index založenom na checkedFields
      const index = Math.floor(Math.random() * checkedFields.length)

      //toto nam da toto: values.capital[1].getRandomChar()
      const letter = checkedFields[index]?.getChar()

      if(letter){
        generatedPassword = generatedPassword + letter
      }
    }

      if(generatedPassword){
        setResult(generatedPassword)
      }else{
        toast.error("Please select at least one option")
      }
  }


  const handleClipboard = async () =>{
    //ak mame result
    if(result){
      await navigator.clipboard.writeText(result)
      toast.success("Copied to your clipboard")
    }else{
      toast.error("No password to copy")
    }
  }


  return (
    <section>
      <div className="container">
        <form id='pg-form' onSubmit={handleOnSubmit}>
          <div className="result">
            <input type="text" id='result' placeholder='Min 6 Char' readOnly 
            value={result}/>
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard></FaClipboard>
              <Toaster></Toaster>
            </div>
          </div>
          <div>
          <div className='field'>
            <label htmlFor="length">Length</label>
            <input type="number" id='length' min={6} max={18} 
            name='length' value={values.length} onChange={setValues}/>
          </div>
          <div className='field'>
            <label htmlFor="capital">Capital</label>
            <input type="checkbox" id='capital' 
            name='capital' checked={values.capital} onChange={setValues}/>
          </div>
          <div className='field'>
            <label htmlFor="small">Small</label>
            <input type="checkbox" id='small' 
            name='small' checked={values.small} onChange={setValues}/>
          </div>
          <div className='field'>
            <label htmlFor="number">Number</label>
            <input type="checkbox" id='number'
            name='number' checked={values.number} onChange={setValues}/>
          </div>
          <div className='field'>
            <label htmlFor="symbol">Symbol</label>
            <input type="checkbox" id='symbol'
            name='symbol' checked={values.symbol} onChange={setValues}/>
          </div>
         </div>
         <button type='submit'>Generate Password</button>
        </form>
      </div>
    </section>
  )
}

export default App