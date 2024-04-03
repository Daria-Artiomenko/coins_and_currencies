import './contactsPage.scss';

const ContactsPage = () => {
    return (
        <section className="contacts">
            <div className="contacts-container">
                <div className="contacts-title">
                Do you have any questions? <br/>
                Contact us
                </div>
                <div className="contacts-phones">
                    <div className="contacts-phones-subtitle">Phone numbers:</div>
                    <div className="contacts-phones-links">
                        <a href="tel:+375258478466" className="contacts-phones-link">
                        +375 (25) 847-84-66 (Life)
                        </a>
                        <a href="tel:+375298888466" className="contacts-phones-link">
                        +375 (29) 888-84-66 (MTC)
                        </a>
                        <a href="tel:+375449998466" className="contacts-phones-link">
                        +375 (44) 999-84-66 (A1)
                        </a>
                    </div>
                </div>
                <div className="contacts-email">
                    <div className="contacts-email-subtitle">Email:</div>
                    <a href="mailto:currencytracker@gmail.com" className='contacts-email-link'>currencytracker@gmail.com</a>
                </div>
            </div>

        </section>
    )
}

export default ContactsPage;