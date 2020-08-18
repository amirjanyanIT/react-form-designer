# react-form-designer

> UI for creating forms via dragging dropping required options

[![NPM](https://img.shields.io/npm/v/react-form-designer.svg)](https://www.npmjs.com/package/react-form-designer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-form-designer
```

## Usage

```jsx
import React, { Component } from 'react'

import FormDesigner from 'react-form-designer'

const App = () => {
  const [fields, setFields] = useState([])
  

  return (
    <FormDesigner 
      fields={fields} 
      onChange={(updatedFields) => setFields(updatedFields)}
      expectedOptions={
        [
          'SINGLE_LINE_TEXT',
          'PARAGRAPH_TEXT',
          'NUMBER',
          'DROPDOWN',
          'MULTI_SELECT',
          'DATE',
          'ATTACHMENT',
          'RADIO_BUTTON',
          'CONTACT_FIELD'
        ]
      }
    >
  )
}
```


## License

MIT © [AmirjanyanIT](https://github.com/AmirjanyanIT)
