import styles from '../../styles.module.css'

export default function searchInput(term, setTerm, doSearch) {
  return (
    <div className={styles.search}>
      <input
        value={term}
        onChange={(evt) => setTerm(evt.target.value)} />
      <button onClick={() => doSearch()}>Search</button>
    </div>
  )
}