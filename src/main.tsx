import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header, Main } from './App'
import './styles/CriticalStyles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
)
