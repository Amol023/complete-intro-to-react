var div = React.DOM.div
var h1 = React.DOM.h1

//creates a new type of element
//it's called a composite component -- component of our own creation
var MyTitle = React.createClass({
  render() {
    return (
      div(null,
        h1({style: { color: this.props.color}}, this.props.title)
      )
    )
  }
})
//different ways to create an instance
//makes the class into a function, when called gives back the component
var MytitleFact = React.createFactory(MyTitle)
var ce = React.createElement
//everything is a function in react
var MyFirstComponent = (
  //here the first argument is the attribute
  div(null,
    //one specific instance of the element created above
    //three different ways to create an instance
    //props allows us to create flexible instances
    MytitleFact({title: 'Props are great', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Props are great!!!!!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Pipi', color: 'peru'}),
    ce(MyTitle, {title: 'Papaaaiyu', color: 'papayawhip'})

  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
