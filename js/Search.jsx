const React = require('react')
const shows = require('../public/data.json')

const Search = () => {
  return (
    // pre shows us code
    <pre><code>
      {/* json stringify takes various arguments which just changes the formatting */}
      {JSON.stringify(shows, null, 4)}
    </code></pre>
  )
}
module.exports = Search
