import React from 'react';
import PropTypes from 'prop-types';
import { formatIntegers } from '../utils/calcs.js';

import Icon from '../components/Icon.jsx';

const CharacterAttribute = ({
  label,
  slug,
  icon,
  value,
  difference,
  percentageValue,
  percentageDifference,
  shouldCompare,
  isPercentage,
}) => (
  <div className={`CharacterAttributes-item color--${slug}`}>
    {/* Show labels */}
    {!shouldCompare &&
      <span className="CharacterAttributes-label">
        <Icon className="CharacterAttributes-icon" icon={icon || slug} />
        <span>{label}</span>
      </span>
    }

    {/* Show difference */}
    <span className="CharacterAttributes-valuesWrapper">
      {typeof difference !== 'undefined' &&
        <span className={`CharacterAttributes-value Comparator-difference ${(difference > 0) ? 'is-greater' : 'is-lower'}`}>
          { (difference > 0) ? `+${formatIntegers(difference)}` : formatIntegers(difference)}
          {typeof percentageDifference !== 'undefined' &&
            <span>
              <br />
              { (percentageDifference > 0) ? `+${percentageDifference}` : percentageDifference}%
            </span>
          }
        </span>
      }

      {/* Show values */}
      <span className="CharacterAttributes-value">
        {`${formatIntegers(parseInt(value, 10))}`}
        {typeof percentageValue !== 'undefined' &&
          <span>
            <br />
            {parseInt(percentageValue, 10)}%
          </span>
        }
      </span>
    </span>
  </div>
);

CharacterAttribute.propTypes = {
  label: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.number.isRequired,
  difference: PropTypes.number,
  percentageValue: PropTypes.number,
  percentageDifference: PropTypes.number,
  shouldCompare: PropTypes.bool,
  isPercentage: PropTypes.bool,
};
CharacterAttribute.defaultProps = {
  shouldCompare: false,
  isPercentage: false,
};
CharacterAttribute.displayName = 'CharacterAttribute';

export default CharacterAttribute;