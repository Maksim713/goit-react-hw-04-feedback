import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onClickBtn = feedbackType => {
    onLeaveFeedback(feedbackType);
  };

  const getButtonClass = index => {
    if (index === 1) {
      return css.optionBtn2;
    } else if (index === 2) {
      return css.optionBtn3;
    } else {
      return css.optionBtn;
    }
  };

  return (
    <ul className={css.container}>
      {Object.keys(options).map((feedbackType, index) => {
        const btnClass = getButtonClass(index);
        return (
          <li key={feedbackType} className={css.item}>
            <button
              type="button"
              className={btnClass}
              onClick={() => onClickBtn(feedbackType)}
            >
              {feedbackType}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
