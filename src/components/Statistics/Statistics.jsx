import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
	return (
    <>
            <div className={css.wrap}>
        <p className={css.good}>Good: {good}</p>
        <p className={css.neutral}>Neutral: {neutral}</p>
        <p className={css.bad}>Bad: {bad}</p>
        <p className={css.total}>Total: {total}</p>
        <p className={css.feedback}>Positive Feedback: {positivePercentage}%</p>
      </div>
    </>
	);
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};