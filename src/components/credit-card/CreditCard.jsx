import React from 'react';
import PropTypes from 'prop-types';
import './CreditCard.css';

const CreditCard = ({
  cardName,
  cardNumber,
  cardType,
  cvv,
  expiryMonth,
  expiryYear,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className='rotate-card'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='rotate-card-inner'>
        <div className='rotate-card-front'>
          <div className='card'>
            <div className='card-chip'></div>
            <h3 className='card-type'>{cardType ? cardType : 'QueensCard'}</h3>
            <div className='card-numbers'>{cardNumber}</div>
            <div className='card-name-and-expiry'>
              <span>{cardName}</span>
              <span>{`${expiryMonth}/${expiryYear}`}</span>
            </div>
          </div>
        </div>
        <div className='rotate-card-back'>
          <div className='card'>
            <div className='card-stripe' />
            <div className='card-signature'>
              <span>{cardName}</span>
              <span>{cvv}</span>
            </div>
            <h3 className='card-type'>{cardType ? cardType : 'QueensCard'}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  cardName: PropTypes.string,
  cardNumber: PropTypes.string,
  cvv: PropTypes.string,
  expiryMonth: PropTypes.string,
  expiryYear: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default CreditCard;
