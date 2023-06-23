import { useState } from "react";

import React from 'react'
import withCalculate from "../utils/withCalculate";

function Tombol(props) {
    console.log (props)
  return (
    <div>
        <h3>x + {props.nilai}</h3>
        <p>{props.nomor}</p>
        <button onClick={props.handleNomor}>tambah</button>
    </div>
      
  )
}

export default withCalculate(Tombol) 
