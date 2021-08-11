export default function results(results) {
  return (
    <div>
      <h2>Results</h2>
      {Array.from(new Set(results)).map(resultSection => {
        return <div><h3>{resultSection.section}</h3> <ul >{results.map(result => {
          if (resultSection.section === result.section)
            return <div><li><a href={result.url}>{result.title})</a></li></div>
        })}</ul></div>
      })}
    </div >
  )
}
