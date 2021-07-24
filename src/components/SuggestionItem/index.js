import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchValue} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    updateSearchValue(suggestion)
  }

  return (
    <li className="item">
      <h1 className="suggestion-heading">{suggestion}</h1>
      <button type="button" className="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-button"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
