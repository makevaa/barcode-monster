import { ranNum } from './utility';

// Get one Digimon's data by id
async function fetchData(id) {
    const url = `https://digi-api.com/api/v1/digimon/${id}`;

    return fetch(url)
    .then(res => {
      if (!res.ok) 
        throw new Error("Error in fetch: " + res.statusText);
      
      return res.json();
    })
}

export const getRandomDigimon = async () => {
  //https://digi-api.com/api/v1/digimon/50

  // Get random id and monster, API has 1460 digimons
  const id = ranNum(1, 1460);
  const data = await fetchData(id);
  return data;
}




