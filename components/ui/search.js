import styles from '../../styles.module.css'

export default function SearchInput(props) {
  return (
    <div className={styles.search}>
      <input
        value={props.term}
        onChange={(evt) => props.setTerm(evt.target.value)} />
      <button onClick={() => props.doSearch()}>Search</button>
    </div>
  )
}