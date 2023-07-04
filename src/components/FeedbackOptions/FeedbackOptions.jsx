import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
    <>
      <div className={css.wrap}>
        {options.map(option => {
          return (
            <button className={css.button}
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}</button>
          )
        }
      )}
      </div>
    </>
	)
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
