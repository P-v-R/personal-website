import axios from "axios";
import SECRET_KEY_JOKE_API from "./secret_key";

const BASE_JOKE_URL = "https://dad-jokes.p.rapidapi.com/random/joke"


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
  //  let jokeRes = axios.request(options).then(function (response) {
  //     console.log("--->", response.data.body);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });

    let resp = await axios.request(options)
    let jokeArr = [resp.data.body[0].setup, resp.data.body[0].punchline]
    return jokeArr;
  }



}

export default JokeApi;
