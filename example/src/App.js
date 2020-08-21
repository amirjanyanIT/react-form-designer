import React, { useState } from 'react'

import FormDesigner from 'react-form-designer'

const App = () => {
  const [fields, setFields] = useState([
    {
      "type": "DROPDOWNSELECT",
      "description": "",
      "name": "",
      "options": [
        {
          "value": "asdsad"
        }
      ]
    }
  ]);
  
  // useEffect(() => console.log(fields), [fields])

  return (
    <FormDesigner
      fields={fields}
      onChange={(newFields) => setFields(newFields)}
      onFieldEdit={(fieldOnEdit) => {
        console.log({ fieldOnEdit })
      }}
      onFieldDelete={(deletedField) => {
        console.log({ deletedField })
      }}
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

export default App
