import logoImg from '../../assets/logo/logo_big.svg';
import './promo.scss'

const Promo = () => {
    return(
        <section className="promo">
            <div className='promo-wrapper'>
                <div className="promo-text">
                    <h1 className="promo-title">Currency <br/> Tracker</h1>
                    <h2 className="promo-descr">Quotes for the dollar and <br/>other international currencies.</h2>
                </div>
                <img src={logoImg} alt="logo" className='promo-logo'/>
            </div>
        </section>
    )
}

export default Promo;