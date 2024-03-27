import HistoryChart from "../../historyChart/HistoryChart";
import LastUpdate from "../../lastUpdate/LastUpdate";
import Promo from "../../promo/Promo";

const TimelinePage = () => {
    return(
        <>
            <Promo/>
            <LastUpdate/>
            <HistoryChart/>
        </>
    )
}
export default TimelinePage;