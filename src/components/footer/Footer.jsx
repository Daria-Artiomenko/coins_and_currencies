import logo from '../../assets/logo/logo.svg';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer">

            <div className="footer-wrapper">
                <div className='footer-info'>
                    <div className="footer-info-title">
                        <img src={logo} alt="logo"/>
                        <h3 className="footer-info-name">Currency Tracker</h3>
                    </div>
                    <p className="footer-info-descr">Since then, the company has grown organically to. Starsup is the world`&apos`s largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.</p>
                </div>

                <div className="footer-nav">
                    <div className="footer-nav-column">
                        <h4 className="footer-nav-column-title">General</h4>
                        <ul className='footer-nav-column-links'>
                            <li className='footer-nav-column-link'>
                                <a href="#">Market</a>
                            </li>
                            <li className='footer-nav-column-link'>
                                <a href="#">Service</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-column-title">Product</h4>
                        <ul className='footer-nav-column-links'>
                            <li className='footer-nav-column-link'>
                                <a href="#">Sparks</a>
                            </li>
                            <li className='footer-nav-column-link'>
                                <a href="#">Snaps</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-column-title">Community</h4>
                        <ul className='footer-nav-column-links'>
                            <li className='footer-nav-column-link'>
                                <a href="#">Ideas</a>
                            </li>
                            <li className='footer-nav-column-link'>
                                <a href="#">Streams</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="footer-rights">© 2023-2024, All Rights Reserved</div>
        </footer>
    )
}

export default Footer;