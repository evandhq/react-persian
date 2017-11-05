/* eslint-disable no-param-reassign */
import React, { PropTypes } from 'react';

const PersianFileSize = ({ bytes, ...props }) => {
  /* Throw exception when `bytes` is not a number
      Note: typeof NaN === 'number' */
  if (typeof bytes !== 'number' || isNaN(bytes)) {
    throw new TypeError('<PersianFileSize /> expects parameter of type number');
  }

  const units = [
    'بایت',
    'کیلوبایت',
    'مگابایت',
    'گیگابایت',
    'ترابایت',
    'پتابایت',
  ];
  const base = 1024;
  let cursor = -1;

  if (Math.abs(bytes) < base) {
    return (
      <span {...props}>
        {bytes} {units[0]}
      </span>
    );
  }

  do {
    bytes /= base;
    ++cursor;
  } while (Math.abs(bytes) >= base && cursor < units.length - 1);

  return (
    <span>
      {bytes.toFixed(1)} {units[cursor]}
    </span>
  );
};

export default PersianFileSize;

PersianFileSize.propTypes = {
  bytes: PropTypes.number.isRequired,
};
