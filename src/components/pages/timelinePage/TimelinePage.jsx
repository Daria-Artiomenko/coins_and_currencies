import HistoryChart from "../../historyChart/HistoryChart";
import Promo from "../../promo/Promo";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

const TimelinePage = () => {
    return(
        <>
            <Promo/>
            <ErrorBoundary>
                <HistoryChart/>
            </ErrorBoundary>
            
        </>
    )
}
export default TimelinePage;