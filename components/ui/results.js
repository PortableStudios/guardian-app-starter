import styles from '../../styles.module.css'


export default function Results(props) {
  return (
    <div>
      <h2 className='h2'>Results</h2>
      <div className={styles.resultsContainer}>
        {Array.from(new Set(props.results)).map(resultSection => {
          return <div><h3>{resultSection.section}</h3> <ul >{props.results.map(result => {
            if (resultSection.section === result.section)
              return <div><li><a href={result.url}>{result.title})</a></li></div>
          })}</ul></div>
        })}
      </div >
    </div>
  )
}
