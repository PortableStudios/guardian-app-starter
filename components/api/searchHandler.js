import axios from 'axios';

async function doSearch(setResults, term) {
  const resultSet = await axios.get('/api/search', {
    params: {
      term: term
    }
  })
  setResults(resultSet.data);
}

export default doSearch

// this isn't working on index, come back later