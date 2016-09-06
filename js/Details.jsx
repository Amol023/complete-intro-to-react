const React = require('react')
const Header = './Header.jsx'
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Here Details and Search both access the same data,
So one way for us to access data is make an ajax request from both
^^ which is highly inefficient

Another approach is to pass the data to a common ancestor (in this case the entire app)
and then pass it as props!
--- This is called Data Tunneling problem
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const Details = React.createClass({

  render () {
    // This is a good way to make the program resilient -- guards against crashes
    // So now we can refer to params, and it'll show a blank object if the props
    // are not passed or something -- so the user will see a blank instead of an eror page
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params

    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>{year}</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>

        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
})

module.exports = Details
