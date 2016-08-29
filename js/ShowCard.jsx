const React = require('react')

const ShowCard = (props) => {
  return (
    <div className='show-card'>
      <img src={`public/img/posters/${props.show.poster}`} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.show.title}</h3>
        <h4 className='show-card-year'>({props.show.year})</h4>
        <p className='show-card-description'>{props.show.description}</p>
      </div>
    </div>
  )
  //  gives react a helper to say that show is a prop, and if it's not an object
  //  show me an error
  //  isRequired makes sure the prop is passed
  ShowCard.propTypes = {
    show: React.PropTypes.object.isRequired
  }
}
module.exports = ShowCard
