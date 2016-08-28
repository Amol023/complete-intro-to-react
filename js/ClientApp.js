var div = React.DOM.div
var h1 = React.DOM.h1

//creates a new type of element
//it's called a composite component -- component of our own creation
var MyTitle = React.createClass({
  render() {
    return (
      div(null,
        h1(null, 'Check out this other thing.')
      )
    )
  }
})
//different ways to create an instance
var MytitleFact = React.createFactory(MyTitle)
var ce = React.createElement
//everything is a function in react
var MyFirstComponent = (
  //here the first argument is the attribute
  div(null,
    //one specific instance of the element created above
    //three different ways to create an instance
    MytitleFact(null),
    React.createElement(MyTitle, null),
    ce(MyTitle, null)
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
