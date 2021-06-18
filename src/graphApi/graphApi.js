const axios = require('axios');
const moment = require('moment')


const BASE_URL  = "https://api.github.com/users";


async function getRepoData(username){
  let resp = await axios.get(`${BASE_URL}/${username}/repos`);
  return resp.data
}

async function parseRepoData(){
  let repoData = await getRepoData("p-v-r");
  // console.log("repo data -->", repoData[0], repoData[2])
  let dates = []
  let repoDates = {}
  for(let i = 0; i < repoData.length; i++ ){

    let year = moment(repoData[i].pushed_at).format("MMM Do YY")
    dates.push(year)
    // console.log("year", year)
    repoDates[year] = (repoDates[year] || 0) + 1; 
  }
  // console.log(repoDates)
  console.log("dates ==>", dates)
  return await formattedData;
}

let graphData = parseRepoData();

console.log("graphdata", graphData)



