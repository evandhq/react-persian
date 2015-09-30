# react-persian
**react-persian** is a set of react components for Persian localization.

# Installation

You can install this package via `npm`:

```bash
npm install react-persian --save
```

# Components
## PersianNumber
You can use `PersianNumber` component to convert the digits to Persian form:

```jsx
import React from 'react';
import { PersianNumber } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<div>
      سال تولد: <PersianNumber>1372</PersianNumber> <!-- ۱۳۷۲ -->
    </div>);
  }
}
```

### Properties
* **latin** (default: *true*): Enable converting Latin numbers to Persian numbers
* **arabic** (default: *false*): Enable converting Arabic numbers to Persian numbers

## PersianNumberWords
You
```jsx
import React from 'react';
import { PersianNumberWords } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<div>
      قیمت: <PersianNumberWords>5600</PersianNumberWords> <!-- پنج هزار و ششصد -->
    </div>);
  }
}
```

## PersianJalaliDate
You can use `PersianJalaliDate` component to render formatted dates in desired format. It's possible to convert dates from Gregorian to Jalali and vice versa and render them.

This component is using [moment-jalaali](https://github.com/jalaali/moment-jalaali). So all formats mentioned there can be used. Check some examples:

```jsx
import React from 'react';
import { PersianJalaliDate } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<div>
      <PersianJalaliDate en fromNow>1372/11/9</PersianJalaliDate> <!-- 22 years ago -->
      <PersianJalaliDate fromNow>1372/11/9</PersianJalaliDate> <!-- 22 سال پیش -->
      <PersianJalaliDate>1372/11/9</PersianJalaliDate> <!-- 1372/11/9 -->
      <PersianJalaliDate timestamp format="jYYYY/jM/jD HH:mm">1443591757</PersianJalaliDate> <!-- 1394/7/8 09:12 -->
      <PersianJalaliDate inputFormat="YYYY/M/D" format="jYYYY/jM/jD">1994/01/29</PersianJalaliDate> <!-- 1372/11/9 -->
      <PersianJalaliDate inputFormat="YYYY/M/D" fromNow>1994/01/29</PersianJalaliDate> <!-- 22 سال پیش -->
    </div>);
  }
}
```

### Properties
* **format** (default: *jYYYY/jM/jD*): Input string format (check [moment-jalaali](https://github.com/jalaali/moment-jalaali#api) format strings.)
* **inputFormat** (default: *format* (previous property)): Render output format.
* **timestamp** (default: *false*): Parse the input date string as timestamp (Epoch time)
* **en** (default: *false*): English mode (mement-jalali loadPersian() does not called in this mode)
* **fromNow** (default: *false*): Render response as humanized string (like 2 hours ago, 3 years ago, etc)
