# react-persian
**react-persian** is a set of react components for Persian localisation.

# Installation

You can install this package via `npm`:

```bash
npm install react-persian --save
```

# Usage

```jsx
import React extends 'react';
import { PersianNumberWords, PersianNumber } from 'react-persian';

class Test extends React.Component {
  render() {
    return (<div>
      <PersianNumberWords>1372</PersianNumberWords> <!-- یک هزار و سیصد و هفتاد و دو -->
      <PersianNumber>1372</PersianNumber> <!-- ۱۳۷۲ -->
    </div>);
  }
}
```
