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
        <section>
            <h1 className='faq-title'>FAQ</h1>
            <p className='support-text'>
                When shopping at Bibisama, you might have some inquiries about our payment methods,
                shipping, returns, or exchanges on our apparel and accessories. Below are some of the
                most frequently asked questions from our customers. If you still have questions, please
                reach out to us at customer.service@bibisama.com and we’ll respond to you as soon as we can.
            </p>
            <ol>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Returns & exchanges</li>
            </ol>
            <div>
                <div>
                    <h3>Payments</h3>
                    <p>blah blah blah</p>
                </div>
                <div>
                    <h3>Shipping</h3>
                    <p>blah blah blah</p>
                </div>
                <div>
                    <h3>Returns & Echanges</h3>
                    <p>blah blah blah</p>
                </div>
            </div>

        </section>
    )
}

export default Support