import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onArrowclick} = props
  const {suggestion} = suggestionDetails
  const onclick = () => {
    onArrowclick(suggestionDetails)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        className="arrow-icon"
        alt="arrow"
        onClick={onclick}
      />
    </li>
  )
}
export default SuggestionItem
