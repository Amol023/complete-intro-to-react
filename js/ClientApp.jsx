// Actions up and props down
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
const Details = require('./Details.jsx')

//  de-structuring
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data.json')

//we needed App to have methods so we cannot have stateless functional component anymore
//We need to use React.createclass or ES6 class
// const App = () => {
const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    if (showArray.length < 1) {
      // replace is a metoid that Route method provides along with its onEnter method
      //  which basically directly the user to the homepage
      return replace("/")
    }
    /*------------------------------------------------------------------------------
      Object.assign(a,b) copies all the properties from object b to object a
      here since nextState is an object with just the 'id' property,
      we are assigning all the properties of showArray[0] object to it
      Here, showArray is an array of one element which is an object containing
      information about one show -- the show that matches the id
    ------------------------------------------------------------------------------*/
    Object.assign(nextState.params, showArray[0])
    return nextState
  },

  render () {
    return (
      <Router history={hashHistory}>
        {/* creating a nested route */}
        <Route path='/' component= { Layout }>
          {/* since we would have the same path for landing and layout, we use Indexroute */}
          <IndexRoute component={ Landing } />
          {/* Passing data (shows) as props */}
          <Route path='/search' component={Search} shows={shows} />
          {/* Here we have to decide how to pass the shows,
          we could either pass all the shows and let Details filter it
          IT depends on the use-case
          Another way to do this is to have a method on App, that gives out the correct movie/show
          The onEnter runs everytime the Route component is loaded*/}
          <Route path='/details/:id' component={ Details } onEnter={this.assignShow}/>
        </Route>
      </Router>
      )
  }
})


//  different ways to create an instance
//  makes the class into a function, when called gives back the component
//  const MytitleFact = React.createFactory(MyTitle)
//  const ce = React.createElement
//  everything is a function in react
//  const MyFirstComponent = (
//  here the first argument is the attribute
//  div(null,
//  one specific instance of the element created above
//  three different ways to create an instance
//  props allows us to create flexible instances
//  MytitleFact({title: 'Props are great', color: 'rebeccapurple'}),
//  React.createElement(MyTitle, {title: 'Props are great!!!!!', color: 'mediumaquamarine'}),
//  ce(MyTitle, {title: 'Pipi', color: 'peru'}),
//  ce(MyTitle, {title: 'Papaaaiyu', color: 'papayawhip'})
//  )
//  )

ReactDOM.render(<App />, document.getElementById('app'))
