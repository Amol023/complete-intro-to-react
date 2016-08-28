//  creates a new type of element
//  it's called a composite component -- component of our own creation
var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

//  creates a new type of element
//  it's called a composite component -- component of our own creation
var MyTitle = React.createClass({
  //  react without JSX
  // render () {
  //   return (
  //     div(null,
  //       h1({style: { color: this.props.color}}, this.props.title)
  //     )
  //   )
  // }
  render () {
    return (
      <div>
        <h1 style={{color: this.props.color, font:'serif'}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
