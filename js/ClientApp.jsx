// Actions up and props down
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
//  de-structuring
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = () => {
  return (
    <Router history={hashHistory}>
      {/* creating a nested route */}
      <Route path='/' component= { Layout }>
        {/* since we would have the same path for landing and layout, we use Indexroute */}
        <IndexRoute component={ Landing } />
        <Route path='/search' component={ Search } />
      </Route>
    </Router>
  )
}

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
