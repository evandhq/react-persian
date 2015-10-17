import React, { Component, PropTypes } from 'react';

const parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
const numbers = {
  0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
  1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
  2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
  two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
  zero: 'صفر',
};
const delimiter = ' و ';

function convert(input) {
  let string = input;

  string = string.split('')
    .reverse()
    .join('')
    .replace(/\d{3}(?=\d)/g, '$&,')
    .split('')
    .reverse()
    .join('')
    .split(',')
    .map((separated) => Array(4 - separated.length).join('0') + separated);

  let result = [];
  for (let iThree = 0; iThree < string.length; iThree++) {
    const three = string[iThree];
    let resultThree = [];

    for (let index = 0; index < three.length; index++) {
      const digit = three[index];
      if (index === 1 && digit === '1') {
        resultThree.push(numbers.two[three[2]]);
      } else if ((index !== 2 || three[1] !== '1') && numbers[index][digit] !== '') {
        resultThree.push(numbers[index][digit]);
      }
    }

    resultThree = resultThree.join(delimiter);
    result.push(resultThree + ' ' + parts[string.length - iThree - 1]);
  }

  result = result.filter(part => part.trim() !== '').join(delimiter).trim();

  if (result === '') {
    result = numbers.zero;
  }

  return result;
}

export default
class PersianNumberWords extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  }

  render() {
    if (typeof this.props.children === 'string') {
      return <span>{convert(this.props.children)}</span>;
    }
    throw new TypeError('<PersianNumberWords /> Only accepts a single child of type number.');
  }
}
