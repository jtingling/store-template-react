import './product-area.css'

const ProductArea = (props) => {
    //navigation map in props.navigatoin
    //the category text should be props.categoryText
    
    return (
        <>
            <div className='location'>
                {props.navigation}
            </div>
            <div className='category-text'>
                <p >
                    These Japanese streetwear clothing styles are perfect for men and women who want to
                    make a statement. From playful to explosive designs, you can find something for any
                    mood and occasion. Impress your friends with original anime shirts they’ve never seen,
                    but definitely want!
                  </p>
            </div>
            <div className='product-container'>
                {props.merchandise}
            </div>
        </>
    )
}

export default ProductArea; 