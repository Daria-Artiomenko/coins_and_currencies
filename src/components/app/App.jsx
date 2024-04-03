import Header from '../header/Header';
// import TimelinePage from '../pages/timelinePage/TimelinePage';
// import MainPage from '../pages/mainPage/MainPage';
import Footer from '../footer/Footer';
import {ThemeContext} from '../../utils/ThemeProvider';
import { useContext, useEffect } from "react";
import './App.css';
import {QueryClientProvider, QueryClient } from '@tanstack/react-query';
import BankCardPage from '../pages/bankCardPage/BankCardPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';


const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("currency-tracker-theme", theme ? "dark" : "light");
  }, [theme]);
  // getPeriodData();
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
            {/* <TimelinePage/> */}
            {/* <BankCardPage/> */}
            <ContactsPage/>
        </main>

        <Footer/>
    </QueryClientProvider>
  )
}

export default App;
