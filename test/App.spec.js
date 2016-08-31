/* eslint-env mocha */

//  chat is an assertion library
const { expect } = require('chai')
const React = require('React')
const Search = require('../js/Search.jsx')
const ShowCard = require('../js/ShowCard.jsx')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')

describe('<Search />', () => {
  it('should render the brand', () => {
    //  shallow only renders the given component, not the ones nested inside
    //  in this case, it won't render ShowCard component
    //  doesn't support events
    const wrapper = shallow(<Search />)
    //  contains is a part of enzyme
    expect(wrapper.contains(<h1 className='brand'>tubeFlix</h1>)).to.be.true
  })

  it('should render as many shows as there"s data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given a new state', () => {
    //  mount is slower than shallow but allow interaction
    const wrapper = mount(<Search />)
    //  jQuery like syntax
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    //  doesn't do change event so we have to simulate
    input.simulate('change')
    //  to make sure two way binding is working
    expect(wrapper.state('searchTerm')).to.equal('house');
    //  mount searches by CSS classes/ids
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
