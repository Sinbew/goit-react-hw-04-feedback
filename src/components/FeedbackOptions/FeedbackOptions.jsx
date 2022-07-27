import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="button-wrapper">
      {options.map((item, index) => {
        return (
          <button
            className="button"
            key={index}
            name={item}
            type="button"
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
