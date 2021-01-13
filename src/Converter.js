import React, { useState, useEffect } from 'react'
import { Paper, TextField, FormControl, Select, Button } from '@material-ui/core'
import axios from 'axios'
import './App.css'



export default function Converter() {
  const [text1, setText1] = useState(1)
  const [text2, setText2] = useState(2)
  const [country, setCountry] = useState([])
  const [country2, setCountry2] = useState([])
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    await axios.get('https://data.fixer.io/api/latest?access_key=1267e02d9c7c1afd1f157f1cf02819e3').then((res) => {
      setCountry(res.data.rates);
      setCountry2(res.data.rates);
    })
  }

  function convert(e) {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    setText2(num)
  }

  return (
    <div className="wall">
      <Paper className="paper">
        <h3>Currency Converter</h3>
        <form onSubmit={convert}>
          <div>
            <TextField variant='outlined' value={text1 || ""} onChange={(e) => setText1(e.target.value)} autoComplete='off' className='textfield' />
            <FormControl className='dropdown' variant='outlined' onChange={(e) => setValue1(e.target.value)} >
              <Select native className="select">
                {Object.keys(country).map((value, index) => <option key={index} value={country[value]}>{value}</option>)}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField variant='outlined' value={text2 || ""} className='textfield' />
            <FormControl className='dropdown' variant='outlined' onChange={(e) => setValue2(e.target.value)} >
              <Select native className="select">
                {Object.keys(country2).map((value, index) => <option key={index} value={country[value]}>{value}</option>)}
              </Select>
            </FormControl>
          </div>
          <Button type='submit' variant='contained' className='button'>Convert</Button>
        </form>
      </Paper>
    </div>
  )
}
