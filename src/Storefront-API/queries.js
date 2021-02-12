
const queryOptions = {
  nProducts: 10,
  nVariants: 5,
  productCategories: ["SHOES", "ACCESSORIES", "PAINTING"]
}

export const query = (direction, position = '', cursor = '', productType) => {
  let query = false;
  if (!cursor && !position) {
    query = `first: ${queryOptions.nProducts}`
  } else if (position && cursor) {
    query = `${direction}:${queryOptions.nProducts}, ${position}:"${cursor}"`
  }

  if (queryOptions.productCategories.some(category=> category === productType)) {
    return JSON.stringify({
      query: `
      {
          products(${query}, query: "product_type:${productType}") {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                id
                handle
                descriptionHtml
                title
                productType
                images(first: 1) {
                  edges {
                    node {
                      id
                      originalSrc
                      altText
                      height
                      width
                    }
                  }
                }
                variants(first: 5) {
                  edges {
                    node {
                      id
                      price
                    }
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      `
    })
  } else {
      throw new Error ("No such product type exists for this store.")
  }
}
