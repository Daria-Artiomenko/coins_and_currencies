// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import ThemeProvider from "./utils/ThemeProvider";
// import { QueryClientProvider, queryClient } from '@tanstack/react-query';
import './index.scss'


async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }
 
  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      {/* <QueryClientProvider client={queryClient}> */}
        <App />
      {/* </QueryClientProvider> */}
    </ThemeProvider>,
  )
})



