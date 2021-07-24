import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {search: ''}

  onSearchInput = event => {
    this.setState({search: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({search: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="box-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image-size"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt=" search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="search"
              value={search}
              placeholder="Search Google"
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="list-search-items">
            {searchResults.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionDetails={each}
                updateSearchValue={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
