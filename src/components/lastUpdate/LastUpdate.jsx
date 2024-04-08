import { useQuery } from "@tanstack/react-query";
import { getExchange } from "../../services/getResponse";
import circle from '../../assets/img/circle.svg'
import './lastUpdate.scss'

const LastUpdate = () => {
    const lastUpdateData = useQuery({ queryKey: ["lastUpdate"], queryFn: getExchange });

    const lastUpdate = lastUpdateData.data?.data.meta.last_updated_at.split('T')[1].slice(0, -1);

    return (
        <section className='last-update'> 
            <div className='last-update-container'> 
                <div className='last-update-block'>
                    <img src={circle} alt="circle"/>
                    <div className='last-update-text'>
                        Last updated at <span>{lastUpdate}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastUpdate;