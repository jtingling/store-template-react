import { useEffect } from 'react';
import '../css/support.css'
const Support = (props) => {

    useEffect(() => {
        props.setHeader({
            imageUrl: ""
        })
        window.scroll(0, 0)
    }, [])
    return (
        <section className='support-section'>
            <h1 className='faq-title'>FAQ</h1>
            <p className='support-text'>
                When shopping at Bibisama, you might have some inquiries about our payment methods,
                shipping, returns, or exchanges on our apparel and accessories. Below are some of the
                most frequently asked questions from our customers. If you still have questions, please
                reach out to us at customer.service@bibisama.com and we’ll respond to you as soon as we can.
            </p>
            <div>
                <div>
                    <h3>Payments</h3>
                    <p className='support-text'>We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, Shop Pay, PayPal, Sezzle, and Bibisama gift cards.</p>
                </div>
                <div>
                    <h3>Shipping</h3>
                    <h4>How much are shipping costs?</h4>
                    <p className='support-text'>Any order over $50 qualifies for free shipping. Shipping on orders less than $50 will be calculated at checkout.</p>
                    <h4>Do you ship internationally?</h4>
                    <p className='support-text'>Yes. Enter your shipping information during checkout, and the cost will be estimated based on your location. We are not responsible for any import, tax, or duty fees.</p>
                    <h4>Do you have expedited shipping options?</h4>
                    <p className='support-text'>Depending on where you live, you may have the option to choose expedited shipping methods for additional costs.</p>
                    <h4>When will my order ship?</h4>
                    <p className='support-text'>After placing your order, it will be marked as pending until it is carefully packaged and shipped. Once the order has shipped, you will be notified via e-mail and provided with a tracking number.</p>
                    <h4>When will my order arrive?</h4>
                    <p className='support-text'>U.S. and Australia orders usually arrive 3-5 business days after being shipped. International orders typically take two weeks to arrive. You will receive a tracking number via email once your order ships.</p>
                    <h4>Will I be provided with a tracking number?</h4>
                    <p className='support-text'>Yes. Once your order ships, we will email you the tracking number for your order.</p>  
                </div>
                <div>
                    <h3>Returns & Echanges</h3>
                    <h4>Do you offer returns or refunds?</h4>
                    <p className='support-text'>Bibisama does not offer returns. Refunds will be provided only for products with manufacturing defects that were present before we ship your item. 
                        Our sizes for shirts, jackets, and sweaters will differ from what our customers may be used to, so please refer to our sizing chart in the item description before placing an order.
                    </p>
                    <h4>Do you offer exchanges?</h4>
                    <p className='support-text'>We’re happy to exchange sizes within 14 days of the customer receiving the product. The customer will be required to cover the return shipping cost. Upon receiving the returned item, we will ship out the replacement as soon as possible and provide a new tracking number. Please note for exchanges that the tag must still be attached, and the item cannot appear or smell used in any way. If the item you return appears to be used, we reserve the right to send the item back to the customer. To inquire about an exchange, please contact: ______.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Support