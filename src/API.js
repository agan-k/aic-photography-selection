import axios from "axios"
const winogrand = axios.get(
         "https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=50"
      )
         .then((response) => {
            this.setState({
               winogrand_collection: response.data.data,
            });
            console.log(response);
         });
   




      export default winogrand