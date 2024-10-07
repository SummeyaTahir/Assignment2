import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'


import Arts_chartsjs_sidebar from './components/Arts_chartsjs_sidebar.jsx'
import Line_Chart from './components/Line_Chart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Arts_chartsjs_sidebar/> */}
    <Line_Chart/>
  </StrictMode>,
)
