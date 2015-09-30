import React, { Component, PropTypes } from 'react';
import jmoment from 'moment-jalaali';

export default class PersianJalaliDate extends Component {
  static propTypes = {
    children: PropTypes.string,
    timestamp: PropTypes.boolean,
    inputFormat: PropTypes.string,
    format: PropTypes.string,
    en: PropTypes.boolean,
    fromNow: PropTypes.boolean,
  }

  static defaultProps = {
    format: 'jYYYY/jM/jD',
  }

  componentWillMount() {
    const { en } = this.props;
    // load persian mode by default if no en mode
    if (!en) {
      jmoment.loadPersian();
    }
  }

  render() {
    const { timestamp, inputFormat, format, children, fromNow } = this.props;
    const moment = (timestamp) ? jmoment.unix(children) : jmoment(children, inputFormat || format);
    const formatted = fromNow ? moment.fromNow() : moment.format(format);
    return (
      <span>{formatted}</span>
    );
  }
}
