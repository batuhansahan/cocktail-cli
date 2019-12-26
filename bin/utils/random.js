const axios = require('axios')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    params: {
      format: 'json',
    },
  })
  return results.data
}