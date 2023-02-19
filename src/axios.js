import axios from "axios"

const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3" //in the total request url, it's the first part which will remain unchanged irrespectve of movie genres or requests.
})
//if we do instance.get("food-bar") so it'll give output https://api.themoviedb.org/3/food-bar. So basically it's appending the arg of instance.get() to the base url.
export default instance