export default function results(results) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(result => {
          return <li><a href={result.url}>{result.title}</a></li>
        })}
      </ul>
    </div>
  )
}
