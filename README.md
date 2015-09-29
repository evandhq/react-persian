# react-persian
**react-persian** is a set of react components for Persian localisation.

# Installation

You can install this package via `npm`:

```bash
npm install react-persian --save
```

# Components
## PersianNumber
You can use `PersianNumber` component to convert the digits to persian form:

```jsx
import React extends 'react';
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
```jsx
import React extends 'react';
import { PersianNumberWords } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<div>
      قیمت: <PersianNumberWords>5600</PersianNumberWords> <!-- پنج هزار و ششصد -->
    </div>);
  }
}
```
