// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custome App !!</h1>
//     </div>
//   )
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
      anotherElement
)
