import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onArrowclick = item => {
    this.setState({searchInput: item.suggestion})
  }

  OnIputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="heading-container">
          {console.log(suggestionsList)}
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            className="google-logo"
            alt="google logo"
          />
        </div>
        <div className="inner-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-bar"
              value={searchInput}
              placeholder="Search Google"
              onChange={this.OnIputChange}
            />{' '}
          </div>

          <ul className="suggeston-container">
            {searchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                onArrowclick={this.onArrowclick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
