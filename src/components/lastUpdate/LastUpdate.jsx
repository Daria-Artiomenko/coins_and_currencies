import { useQuery } from "@tanstack/react-query";
import { getExchange } from "../../services/getResponse";
import circle from '../../assets/img/circle.svg'
import './lastUpdate.scss'

const LastUpdate = () => {
    const lastUpdateData = useQuery({ queryKey: ["lastUpdate"], queryFn: getExchange });

    const date = lastUpdateData.data?.data.meta.last_updated_at.split('T')[0];

    return (
        <section className='last-update'> 
            <div className='last-update-container'> 
                <div className='last-update-block'>
                    <img src={circle} alt="circle"/>
                    <div className='last-update-text'>
                        Last updated at <span>{date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastUpdate;