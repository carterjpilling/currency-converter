import React, { useState } from 'react'
import axios from 'axios'



export default function Converter() {

  function convert() {
    console.log(process.env.API_KEY)
    axios.get(`/api/convert`)
  }

  return (
    <div>
      <button onClick={() => (convert())}>
        Convert
      </button>
      Converter
    </div>
  )
}
