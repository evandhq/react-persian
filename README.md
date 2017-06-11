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
