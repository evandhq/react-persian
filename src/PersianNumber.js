import React, { PropTypes, Component } from 'react';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
const arabicToPersianMap = ['۴', '۵', '۶'];
const arabicNumbers = [/٤/g, /٥/g, /٦/g];

function latinToPersian(string) {
  let result = string;

  for (let index = 0; index < 10; index++) {
    result = string.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

function arabicToPersian(string) {
  let result = string;

  for (let index = 0; index < 10; index++) {
    result = string.replace(arabicNumbers[index], arabicToPersianMap[index]);
  }

  return result;
}

class PersianNumber extends Component {
  static propTypes = {
    arabic: PropTypes.bool,
    latin: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    latin: true,
    arabic: false,
  };

  convert(string) {
    let result;

    if (this.props.latin) {
      result = latinToPersian(string);
    }

    if (this.props.arabic) {
      result = arabicToPersian(result);
    }

    return result;
  }

  render() {
    let { children } = this.props;

    if (!(children instanceof Array)) {
      children = [children];
    }

    return (<span>
            {
              children.map(child => {
                if (typeof child === 'string') {
                  return this.convert(child);
                } else if (typeof child === 'number') {
                  return this.convert(child.toString());
                }
                return child;
              })
            }
        </span>);
  }
}

export default PersianNumber;
