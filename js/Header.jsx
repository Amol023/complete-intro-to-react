const React = require('react')
const Link = require('react-router')


const Header = React.createClass({
  render () {
    let toggleOption
    console.log('what is your value dummy?', this.props.searchComponent)
    if (this.props.searchComponent) {
      console.log('going here?')
      toggleOption =
        <header className='header'>
          <h1 className='brand'>tubeFlix</h1>
          <input value={this.props.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.props.handeleSearchTermEvent}/>
        </header>
      }
    // } else {
    //   console.log('this should be the details component')
    //
    //   toggleOption =
    //     <header className='header-back'>
    //       <Link to='/search' className='back'>Back</Link>
    //     </header>
    // }
    return (
      <div className='main-header'>
        <header className='header'>
          <h1 className='brand'>tubeFlix</h1>
        </header>
        {toggleOption}
      </div>
    )
  }
})

module.exports = Header
