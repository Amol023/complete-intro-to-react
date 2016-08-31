const React = require('react')
const ShowCard = require('./ShowCard.jsx')
const data = require('../public/data.json')

const Search = () => {
  return (
    // pre shows us code
    <div className='container'>
      <header className='header'>
        <h1 className='brand'>tubeFlix</h1>

      </header>
      <div className='shows'>
        {data.shows.map((eachShow) => {
          return (
            //  each show is passed as a prop
            //  react is smart about how it updates the DOM
            //  the key helps out to tell react to use the same element
            //  instead of creating a new element
            <ShowCard {...eachShow} key={eachShow.imdbID}/>
          )
        })}
      </div>
    </div>
  )
}
module.exports = Search
