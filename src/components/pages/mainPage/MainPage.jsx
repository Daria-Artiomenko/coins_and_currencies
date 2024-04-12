import CurrencyList from "../../currencyList/CurrencyList";
import LastUpdate from "../../lastUpdate/LastUpdate";
import Promo from "../../promo/Promo";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

const MainPage = () => {
    return(
        <>
            <Promo/>
            <ErrorBoundary>
                <LastUpdate/>
            </ErrorBoundary>
            <ErrorBoundary>
                <CurrencyList/>
            </ErrorBoundary>
        </>

    )
}
export default MainPage;