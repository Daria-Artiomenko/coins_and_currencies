import './bankCardInfo.scss';

const BankCardInfo = () => {
    return(
        <section className="about-cards">
            <div className="about-cards-container">
                <div className="about-cards-title">Debit Card vs Credit Card</div>
                <div className="about-cards-text">
                Many bank debit cards are issued by credit card companies, so it may seem like there is little distinction between credit and debit cards. For example, a Mastercard debit card can look like a Mastercard credit card. However, they differ in many ways, from the way they finance a purchase to the amount of consumer protections they provide.
                Here is a comparison of some of their main features in more detail.
                </div>
                <div className="about-cards-subtitle">Financing</div>
                <div className="about-cards-descr">
                Credit cards and debit cards work in fundamentally different ways in terms of how they use your money. Using a debit card to make a purchase is like writing a check or paying with cash. You&apos;re paying for the item with funds in your bank account, not with revolving credit.<br/><br/>

                When you use a credit card, you&apos;re essentially using a revolving loan. The credit card company pays the merchant, then bills you for the amount. You repay it when you get your monthly statement. If you don&apos;t repay the full amount, you pay interest on the remaining portion the following month.

                </div>
                <div className="about-cards-subtitle">Rewards</div>
                <div className="about-cards-descr">
                Some debit cards offer reward programs, similar to credit card rewards programs, such as 1% cashback on all purchases.<br/><br/>
                However, rewards programs are more common with credit cards, which can offer better terms with an introductory offer, cash back rewards, travel points, andother perks.
                </div>
                <div className="about-cards-subtitle">Protections</div>
                <div className="about-cards-descr">
                By law, you cannot be held responsible for more than $50 of fraudulent purchases made on a debit or credit card, as long as you report the fraud in a timely manner. However, credit card companies often extend their protections to provide zero liability to cardholders.
                </div>
            </div>
        </section>
    )
}
export default BankCardInfo;