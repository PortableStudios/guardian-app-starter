export default function searchInput(term, setTerm, doSearch) {
  return (
    <div>
      <input
        value={term}
        onChange={(evt) => setTerm(evt.target.value)} />
      <button onClick={() => doSearch()}>Search</button>
    </div>
  )
}