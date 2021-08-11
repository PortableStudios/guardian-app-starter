import React, { useState } from 'react';
import axios from 'axios';
import searchInput from '../components/ui/search';
import resultsMap from '../components/ui/results';
import styles from '../styles.module.css'

const IndexPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const doSearch = async () => {
    const resultSet = await axios.get('/api/search', {
      params: {
        term: term
      }
    })
    setResults(resultSet.data);
  }

  return (
    <div className={styles.main}>
      <h1>Guardian Search</h1>
      {searchInput(term, setTerm, doSearch)}
      {resultsMap(results)}
    </div>
  )
}

export default IndexPage;