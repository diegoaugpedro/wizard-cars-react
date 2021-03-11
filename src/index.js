import React from 'react'
import ReactDOM from 'react-dom'

import Model from './components/Model'
import Version from './components/Version'
import Color from './components/Color'
import Optional from './components/Optional'

import './index.css'

<h1>Wizard de Carros</h1>

ReactDOM.render(
    <h2><Model /></h2>,
    document.getElementById('root')
)

ReactDOM.render(
    <h2><Version /></h2>,
    document.getElementById('root')
)

ReactDOM.render(
    <h2><Color /></h2>,
    document.getElementById('root')
)

ReactDOM.render(
    <h2><Optional /></h2>,
    document.getElementById('root')
)
