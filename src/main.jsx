import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'


async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }
 
  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  )
})


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </React.StrictMode>,
// )


