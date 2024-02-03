import axios from "axios"


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default instance;

// because the above is default export we can change its name when we use in another component but if it is just only export we can't change it's name we must have to use it as it is.


