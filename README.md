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
* **format** (default: *false*): Enable comma separate number every 3 digit
* **removeCommas** (default: *false*): Enable removing every comma from number/string

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

## PersianFileSize
Used to make file size human-readable.

```jsx
import React from 'react';
import { PersianFileSize } from 'react-persian';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h3>حجم فایل:</h3>
        <PerisnFileSize bytes={123456789} /> <!-- 117.7 مگابایت -->
      </div>
    )
  }
}
```

###Properties
* **bytes** File size in bytes

# functions
### latinToPersian
You can use `latinToPersian` function to convert the digits to Persian:
```jsx
import { latinToPersian } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<button onClick={() => console.log(latingToPersian('44'))}>show 44 in persian</button>)
  }
}
```
### arabicToPersian
You can use `arabicToPersian` function to convert the Arabic digits to Persian:
```jsx
import { arabicToPersian } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<button onClick={() => console.log(arabicToPersian('٤٥'))}>show ٤٥ in persian</button>)
  }
}
```
### formatString
You can use `formatString` function to add commas every 3 characters fron right:
```jsx
import { formatString } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<button onClick={() => console.log(formatString('۲۵۰۰۰۰۰۰۰'))}> is equal to ۲۵۰,۰۰۰,۰۰۰</button>)
  }
}
```
### removeCommasFromString
You can use `formatString` function to remove any commas from string:
```jsx
import { removeCommasFromString } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<button onClick={() => console.log(removeCommasFromString('۲۵۰,۰۰۰,۰۰۰'))}> is equal to ۲۵۰۰۰۰۰۰۰ (without commas)</button>)
  }
}
```
