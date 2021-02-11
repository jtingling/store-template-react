
const queryOptions = {
  nProducts: 10,
  nVariants: 5,
}

export const shirtQuery = JSON.stringify({
  query: `
    {
        products(first: ${queryOptions.nProducts}, query: "product_type:SHOES") {
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
              options {
                id
                name
                values
              }
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
        }
      }
    `
})

export const afterShirtQuery = (cursor) => {
  return JSON.stringify({
    query: `
    {
        products(first:${queryOptions.nProducts}, after:"${cursor}", query: "product_type:SHOES") {
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
}

export const shirtQuery2 = JSON.stringify({
  query: `
  {
    products(first:10) {
      pageInfo {
        hasNextPage
        hasPreviousPage
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
        products(first: ${queryOptions.nProducts}, query: "product_type:PAINTINGS") {
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