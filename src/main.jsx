import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomeHooks } from './03-examples/MultipleCustomHooks'
//import { FormCustomeHook } from './02-useEffect/FormCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomeHooks } from './01-useState/CounterWithCustomeHooks'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MultipleCustomeHooks/>
  //</React.StrictMode>,
)
