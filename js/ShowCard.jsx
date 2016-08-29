const React = require('react')

const ShowCard = (props) => {
  return (
    <div className='show-card'>
      <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{prop.title}</h3>
        <h4 className='show-card-year'>({props.year})</h4>
        <p className='show-card-description'>{props.description}</p>
      </div>
    </div>
  )
  //  gives react a helper to say that show is a prop, and if it's not an object
  //  show me an error
  //  isRequired makes sure the prop is passed

  //  const string = React.PropTypes.string
  //  ^same as above
  const { string } = React.PropTypes
  ShowCard.propTypes = {
    title: string.isRequired,
    description: string.isRequired,
    year: string.isRequired,
    poster: string.isRequired
  }
}
module.exports = ShowCard
