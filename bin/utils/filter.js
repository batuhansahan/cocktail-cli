const axios = require('axios')

module.exports = async (name) => {
  const results = await axios({
    method: 'get',
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    params: {
      format: 'json',
    },
  })
  return results.data
}