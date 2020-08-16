# form-designer

> UI for creating forms via dragging dropping required options

[![NPM](https://img.shields.io/npm/v/form-designer.svg)](https://www.npmjs.com/package/form-designer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save form-designer
```

## Usage

```jsx
import React, { Component } from 'react'

import FormDesigner from 'form-designer'

const App = () => {
  const [fields, setFields] = useState([])
  

  return (
    <FormDesigner 
      fields={fields} 
      onChange={(updatedFields) => setFields(updatedFields)}
    >
  )
}
```

## License

MIT © [AmirjanyanIT](https://github.com/AmirjanyanIT)
