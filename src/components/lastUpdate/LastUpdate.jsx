import circle from '../../assets/img/circle.svg'
import './lastUpdate.scss'

const LastUpdate = () => {
    return (
        <section className='last-update'> 
            <div className='last-update-container'> 
                <div className='last-update-block'>
                    <img src={circle} alt="circle"/>
                    <div className='last-update-text'>
                        Last updated at <span>11:59pm</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastUpdate;