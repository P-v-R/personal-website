import axios from "axios";
import SECRET_KEY_JOKE_API from "./secret_key";

const BASE_JOKE_URL = "https://dad-jokes.p.rapidapi.com/joke/type/programming"
let jokeCount = 0;


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

const options = {
  method: 'GET',
  url: BASE_JOKE_URL,
  headers: {
    'x-rapidapi-key': SECRET_KEY_JOKE_API,
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
  }
};


class JokeApi {




  //---------------------------------COMPANIES-----------------------------------

  /** Get a random joke from can i haz dad joke API. */

  static async getJoke() {
    //a pi only has 19 programming jokes, 
    // reset jokeCount to 0 when it hits 18
    if(jokeCount >= 18) jokeCount = 0; 

    let resp = await axios.request(options)
    let jokeArr = [resp.data.body[jokeCount].setup, resp.data.body[jokeCount].punchline]
    jokeCount++
    
    return jokeArr;
  }



}

export default JokeApi;
