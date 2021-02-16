
export const setShopifyCursor = (position, productData) => {
    let cursor = {};
    try{
        if (productData.pageInfo.hasNextPage && productData.pageInfo.hasPreviousPage) { 
            if (position === "after") {
                cursor["after"] = productData.edges[productData.edges.length - 1].cursor;
            } else if (position === "before") {
                cursor["before"] = productData.edges[0].cursor;
            } else {
                throw "Pagination error setting next cursor.";
            }
        } else if (productData.pageInfo.hasNextPage) {
            if (position === "after") {
                cursor["after"] = productData.edges[productData.edges.length - 1].cursor;
            } else {
                throw "Pagination error setting next cursor.";
            }
        } else if (productData.pageInfo.hasPreviousPage) {
            if (position === "before") {
                cursor["before"] = productData.edges[0].cursor;
            } else {
                throw "Pagination error setting cursor.";
            }
        } else {
            throw "Error in reading productData. For use with Storefront API.";
        }
        return cursor;
    } catch (e) {
        console.log(e);
    }
}



//TODO: Refactor