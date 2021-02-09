const queryOptions = {
    nProducts: 10,
    nVariants: 5,
}

export const shirtQuery = JSON.stringify({
    query: `
    {
        products(first: 10, query: "product_type:SHOES") {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              handle
              descriptionHtml
              title
              productType
              options {
                id
                name
                values
              }
              images(first: 5) {
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
        }
      }
    `
})

export const accessoryQuery = JSON.stringify({
  query: `
  {
      products(first: 10, query: "product_type:ACCESSORIES") {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            handle
            descriptionHtml
            title
            productType
            options {
              id
              name
              values
            }
            images(first: 5) {
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
      }
    }
  `
})

export const paintingQuery = JSON.stringify({
  query: `
  {
    products(first: 10, query: "product_type:PAINTING") {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          handle
          descriptionHtml
          title
          productType
          options {
            id
            name
            values
          }
          images(first: 5) {
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
    }
  }  
  `
})