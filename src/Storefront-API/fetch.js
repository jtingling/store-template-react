let shopifyHeaders = new Headers(); 
shopifyHeaders.append('X-Shopify-Storefront-Access-Token', '6cb0345be9a9d6bc63133406d1dadf51');
shopifyHeaders.append('Content-Type', 'application/json');

const getStoreProducts = async (searchQuery) => {
    let myInit = {
        method: 'POST',
        headers: shopifyHeaders,
        mode: 'cors',
        body: searchQuery
    }
    let products;
    try {
        console.log("Accessing Shopify API...");
        const response = await fetch('https://xxteststore.myshopify.com/api/2021-01/graphql.json', myInit);
        if (!response.ok) {
            throw new Error('Response from server failed. ' + response.status);
        }
        products = await response.json();
    } catch (error) {
        console.log(error);
    }
    return products;
}

const getStoreData = async (gqlQuery) => {
  try {
    let result = await getStoreProducts(gqlQuery);
    return result;
  } catch (error) {
      console.log(error);
  } 
}

export { getStoreData };
