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
      renderInToolBox={
        <button>Custom Button</button>
      }
      styles={{
        mainContainer: {}
        workGround: {}
        toolBox: {}
        toolBoxElements: {
          clearButton:{}
          optionButton:{}
        }
      }}
      onFieldStartedEdit={(fieldStartedEdit) => console.log(fieldStartedEdit)}
      onFieldEdit={(fieldOnEdit) => console.log({ fieldOnEdit })}
      onFieldDelete={(deletedField) => console.log({ deletedField })}
      customOptions={[
        {
          icon: null,
          type: "MY_CUSTOM_FIELD",
          title: 'Custom Field',
          renderIn: (_field,fieldIndex) => {
            return <div>this is custom JSX {fieldIndex}</div>
          }
        },
        {
          icon: null,
          type: "MY_CUSTOM_FIELD_2",
          title: 'Custom Field 2',
          options: true,
          renderIn: (_field,fieldIndex) => {
            return <div>this is custom JSX {fieldIndex}</div>
          }
        }
      ]}
    >
  )
}
```

## Optional Parameters

- expectedOptions
- styles
- renderInToolBox
- onFieldEdit
- onFieldDelete
- onFieldStartedEdit
- customOptions
## License

MIT © [AmirjanyanIT](https://github.com/AmirjanyanIT)
