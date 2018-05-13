import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default {
    loadPosts: async () => {
        const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/get-posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
          });
        
          const data = await response.json();
          return data.posts;
    },
    loadUser: async (publicKey) => {
        const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/fetch-user?pk=' + publicKey, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        });
    
        const data = await response.json();
        return data.user;
    }
}