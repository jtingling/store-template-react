import './categoryheader.css'

const CategoryHeader = (props) => {

    return (
        <div className='category-info'>
            <header className='section-header'>
                <h1 className='section-title'>{props.category}</h1>
                <div>
                    <div>
                        <h3>prop.subtitle</h3>
                        <p className='category-description'>
                            prop.description
                    </p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CategoryHeader;