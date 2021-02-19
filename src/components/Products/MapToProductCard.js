import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import ProductCard from './ProductCard';

const MapToProductCard = (data) => {
    let location = useLocation();

    try {
        if (data.data === undefined) {
            return null;
        } else {
            return data.data.map((product) => {
                return <Link
                    key={product.node.id}
                    to={{
                        pathname: `/${data.type}/${product.node.handle}`,
                        state: { background: location }
                    }}>
                    <ProductCard
                        key={product.node.id}
                        product={product.node}
                        images={product.node.images} />
                </Link>
            })
        }

    } catch (e) {
        console.log(e);
    }
}

export default MapToProductCard;
