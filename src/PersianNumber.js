import React, { PropTypes, Component } from 'react';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
const arabicToPersianMap = ['۴', '۵', '۶'];
const arabicNumbers = [/٤/g, /٥/g, /٦/g];

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
    if (this.props.latin) {
      string = latinToPersian(string);
    }

    if (this.props.arabic) {
      string = arabicToPersian(string);
    }

    return string;
  }

  render() {
    let { children } = this.props;

    if (typeof children !== 'array') {
      children = [children];
    }

    return (<span>
            {
              children.map(child => {
                if (typeof child === 'string') {
                  return this.convert(child);
                }
                return child;
              })
            }
        </span>);
  }
}

export default PersianNumber;

function latinToPersian(string) {
  for (let i = 0; i < 10; i++) {
    string = string.replace(latinNumbers[i], latinToPersianMap[i]);
  }

  return string;
}

function arabicToPersian(string) {
  for (let i = 0; i < 10; i++) {
    string = string.replace(arabicNumbers[i], arabicToPersianMap[i]);
  }

  return string;
}
