import PropTypes from 'prop-types'; 

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => {
                return (
                    <button
                        type="button"
                        name={option}
                        key={option}
                        onClick={onLeaveFeedback}
                    >{option}</button>)
            })}
            
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}