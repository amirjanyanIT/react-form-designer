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
      onChange={(newFields) => setFields(newFields)}
      onFieldStartedEdit={(fieldStartedEdit) => console.log(fieldStartedEdit)}
      onFieldEdit={(fieldOnEdit) => console.log({ fieldOnEdit })}
      onFieldDelete={(deletedField) => console.log({ deletedField })}
      containerHeight={900}
      expectedOptions={[
        'SINGLECHECKBOX',
        'MULTIPLECHECKBOXES',
        'DATEPICKER',
        'DROPDOWNSELECT',
        'SINGLELINETEXT',
        'MULTIPLECHECKBOXES',
        'MULTILINETEXT',
        'FILE',
        'RADIOSELECT',
        'CONTACT',
        'NUMBER'
      ]}
      customOptions={[
        {
          type: 'SINGLECHECKBOX',
          title: 'Single Check Box',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'MULTIPLECHECKBOXES',
          title: 'Multiple Checkboxes',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'DATEPICKER',
          title: 'Date Picker',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'DROPDOWNSELECT',
          title: 'Dropdown Select',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'SINGLELINETEXT',
          title: 'Single Line Text',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'MULTIPLECHECKBOXES',
          title: 'Multiple checkboxes',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'MULTILINETEXT',
          title: 'Multiline text',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'FILE',
          title: 'File',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'RADIOSELECT',
          title: 'Radio Select',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'CONTACT',
          title: 'Contact',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        },
        {
          type: 'NUMBER',
          title: 'Number',
          options: true,
          renderIn: (field,fieldIndex) => {
            return <div>this is custom JSX{fieldIndex}</div>
          }
        }
      ]}
    />
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
- containerHeight
## License

MIT © [AmirjanyanIT](https://github.com/AmirjanyanIT)
