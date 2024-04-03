import { useContext, useEffect, Suspense } from "react";
import {QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {ThemeContext} from '../../utils/ThemeProvider';

import Header from '../header/Header';
import TimelinePage from '../pages/timelinePage/TimelinePage';
import MainPage from '../pages/mainPage/MainPage';
import BankCardPage from '../pages/bankCardPage/BankCardPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import Footer from '../footer/Footer';

import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("currency-tracker-theme", theme ? "dark" : "light");
  }, [theme]);

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

      <Router>
        <Header/>

          <main>
            <Suspense fallback={<span>Loading...</span>}>

              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/Timeline' element={<TimelinePage/>}/>
                <Route path='/BankCard' element={<BankCardPage/>}/>
                <Route path='/Contacts' element={<ContactsPage/>}/>
              </Routes>

            </Suspense>
          </main>

          <Footer/>
      </Router>

    </QueryClientProvider>
  )
}

export default App;
