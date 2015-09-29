import React  from 'react';

export default
class PersianNumberWords extends React.Component {
  render() {
    if (typeof this.props.children === 'string') {
      return <span>{convert(this.props.children)}</span>;
    } else {
      throw '<PersianNumberWords /> Only accepts a single child of type number.'
    }
  }
}

const parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
const numbers = {
  0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
  1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
  2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
  two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
  zero: 'صفر'
};
const delimiter = ' و ';

function convert(string) {
  string = string.split('')
    .reverse()
    .join('')
    .replace(/\d{3}(?=\d)/g, "$&,")
    .split('')
    .reverse()
    .join('')
    .split(',')
    .map((string) => Array(4 - string.length).join('0') + string);

  let result = [];
  for (let iThree = 0; iThree < string.length; iThree++) {
    let three = string[iThree];
    let resultThree = [];

    for (let i = 0; i < three.length; i++) {
      let digit = three[i];
      if (i == 1 && digit == '1') {
        resultThree.push(numbers.two[three[2]]);
      } else if ((i != 2 || three[1] != '1') && numbers[i][digit] != '') {
        resultThree.push(numbers[i][digit]);
      }
    }

    resultThree = resultThree.join(delimiter);
    result.push(resultThree + ' ' + parts[string.length - iThree - 1]);
  }

  result = result.filter(x => x.trim() != '').join(delimiter).trim();

  if (result != '') {
    return result
  } else {
    return numbers.zero;
  }
}
