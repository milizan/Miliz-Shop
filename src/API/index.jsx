// cohortName variable 
// const cohortName = '2302-acc-pt-web-pt-a';
// Use the API_URL variable for fetch requests
const API_URL = `https://fakestoreapi.com`;

// Fetches all posts from the API 
export async function fetchAllProducts() {
    try {
      const response = await fetch(`${API_URL}/products`);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }