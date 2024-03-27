import Header from '../header/Header';
import TimelinePage from '../pages/timelinePage/TimelinePage';
// import MainPage from '../pages/mainPage/MainPage';
import Footer from '../footer/Footer';
import './App.css';
import {QueryClientProvider, QueryClient } from '@tanstack/react-query';


const App = () => {

  // const {isLoading, error, data} = useQuery(['todos'],
  //       () => fetch('/todos').then(res => res.json()))

  // if (isLoading) return 'Loading...'
  // if (error) return `An error has occurred:${error.message}`

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 120000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
        <Header/>
        <main>
            {/* <MainPage/> */}
            <TimelinePage/>
        </main>

        <Footer/>
    </QueryClientProvider>
  )
}

export default App;
