import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from '../components/ui/search';
import ResultsMap from '../components/ui/results';
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
      <SearchInput term={term} setTerm={setTerm} doSearch={doSearch} />
      <ResultsMap results={results} />
    </div>
  )
}

export default IndexPage;