import Client from 'shopify-buy';
import { domain, storeToken } from './store-access'

export const client = Client.buildClient({
    storefrontAccessToken: storeToken,
    domain: domain
  });