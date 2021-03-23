import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
const Landing = (props) => {

    useEffect(()=>{
        props.setHeader({
            title: "Welcome to the Template Store!",
            text: {
              a: "Some eye-catching text!",
              b: "something something"
            },
            link: <Link to='/aboutus'>Featured Product!</Link>,
            imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/files/IMG_7907_3024x.JPG?v=1593068622"
          })
    },[])
    return (
        <h1>Future Landing Page</h1>
    )
}

export default Landing