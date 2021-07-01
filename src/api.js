import axios from "axios";

const BASE_JOKE_URL = "https://dad-jokes.p.rapidapi.com/joke/type/programming"
const JOKE_KEY = process.env.REACT_APP_SECRET_KEY_JOKE_API
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
    'x-rapidapi-key': JOKE_KEY,
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
  }
};


class JokeApi {

  /** Get a random joke from can i haz dad joke API. */

  static async getJoke() {
    //a pi only has 19 programming jokes, 
    // reset jokeCount to 0 when it hits 18
    if (jokeCount >= 18) jokeCount = 0;

    let resp = await axios.request(options)
    let jokeArr = [resp.data.body[jokeCount].setup, resp.data.body[jokeCount].punchline]
    jokeCount++

    return jokeArr;
  }

}

// class emailApi {

//   const serviceID = 'default_service';
//   const templateID = 'template_qurebh8';

  

//   static async sendEmail(contactFormData) {

    // var templateParams = {
    //   email: contactFormData.email,
    //   subject: contactFormData.subject,
    //   message: contactFormData.message
    // };

//     const resp = await axios.post(BASE_EMAIL_URL, contactFormData)

//     return resp.status


//   }
// }

export default JokeApi;
