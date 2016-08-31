const React = require('react')
const ShowCard = require('./ShowCard.jsx')
const data = require('../public/data.json')
// this is other way to do it, but doesn't have auto binding
// class Search extends React.Component {

//  one way to create stateful components, and handles binding
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handeleSearchTermEvent(event) {
    this.setState({searchTerm : event.target.value})
  },

  render () {
    return (
      // pre shows us code
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>tubeFlix</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handeleSearchTermEvent}/>
        </header>
        <div className='shows'>
          {data.shows
            .filter((eachShow) =>`${eachShow.title} ${eachShow.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((eachShow) => {
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
})
module.exports = Search
