import './App.css'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import 'styled-components';

const PaypalButtonComponent = () => {
  const initialOptions ={ 
    "client-id": "AYP7mA71vclWG094s6y1sOzFFU9EhZwFIgOHy8vm7QEju86oBAesY-MpFNfrr1DD1dE4H_LiFPCKgQjd",
    currency: "USD",
    intent: "capture"
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units:[
        {
          amount:{
            currency_code: "USD",
            value: "50"
          }
        }
      ]
    })
  }

  const onApprove = (data,actions) => {
    return actions.order.cpature().then(function (details) {
      alert("transaction completed by" + details.payer.name.given_name)
    }) 
  }
  
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
      Style={{
        layout: "horizontal",
        color: 'blue',
        shape: 'rect',
        label: 'paypal'  }}
        createOrder={(data, actions) => createOrder (data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  )
}

function App() {
 
  return (
  <body>
    <styledWrapper>
     <div className='container'>
      <div className='margin'>
      <h2>Pago Cuota de mantenimiento</h2>
        <div className='pay'>
        <PaypalButtonComponent/>
          </div>
      </div>
     </div>
     </styledWrapper>
     </body>
  ) 
}

export default App
