//  *****************************************************
//  **********  /02-react-sin-dependencias.js  **********
//  *****************************************************

import React from "https://esm.sh/react@18.2.0"
import ReactDom from "https://esm.sh/react-dom@18.2.0/client"


//  **********  Código JavaScript  **********
const appDomElement = document.getElementById('app')

const root = ReactDom.createRoot(appDomElement)
      //root.render('<button> Me gusta </button>')
      
const h       = React.createElement
const button1 = h('button', { "data-id": 123}, 'Button 1')
const button2 = h('button', { "data-id": 456}, 'Button 2')
const button3 = h('button', { "data-id": 789}, 'Button 3')

//  const div     = React.createElement('div', null, [button1, button2, button3])
const app     = React.createElement(React.Fragment, null, [button1, button2, button3])


//  **********  Código JSX  **********  Hace lo mismo que arriba.
/*
<React.Fragment>
    <button data-id="123"> Button1 </button>
    <button data-id="123"> Button2 </button>
    <button data-id="123"> Button3 </button>
</React.Fragment>
*/

root.render(app)











