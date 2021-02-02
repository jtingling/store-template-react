const queryOptions = {
    nProducts: 1,
    nVariants: 5,
}

const query = JSON.stringify({
    query: `
    {
        products(first: 20) {
          edges {
            node {
              id
              handle
              title
              tags
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

export default query