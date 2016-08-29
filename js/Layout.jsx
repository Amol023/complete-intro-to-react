const React = require('react')

const Layout = (props) => {
  return (
    <div className='app-container'>
      {/* children is a special kind of prop */}
      {/* children gives access to all the child components/elements */}
      {props.children}
    </div>
  )
}

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
