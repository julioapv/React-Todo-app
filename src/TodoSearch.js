import './TodoSearch.css'

function TodoSearch() {
  return (
    <input 
    className='input'
    placeholder='Learn PHP'
    onChange={(e) => {
      console.log(e.target.value);
    }}
    />
  )
}

export { TodoSearch };