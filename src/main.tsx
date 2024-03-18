import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/Footer'
import Main from './componentes/Main'
import Footer from './componentes/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer></Footer>
  </React.StrictMode>,
)
