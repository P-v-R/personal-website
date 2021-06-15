const axios = require('axios');


const BASE_URL  = "https://api.github.com/users";

async function getRepoData(username){
  let resp = await axios.get(`${BASE_URL}/${username}/repos`);
  return resp.data
}

async function parseRepoData(){
  let repoData = await getRepoData("p-v-r");
  for(let repo of repoData){
    console.log("pushed at -->", repo.pushed_at, repo.size)
  }
}

export default parseRepoData;

