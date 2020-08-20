import React, { useState } from 'react'

import FormDesigner from 'react-form-designer'

const App = () => {
  const [fields, setFields] = useState([]);
  
  // useEffect(() => console.log(fields), [fields])

  return (
    <FormDesigner
      fields={fields}
      onChange={(newFields) => setFields(newFields)}
      // expectedOptions={[
      //   'PARAGRAPH_TEXT',
      //   'NUMBER',
      //   'DROPDOWN'
      // ]}
      onFieldEdit={(fieldOnEdit) => {
        console.log({ fieldOnEdit })
      }}
      onFieldDelete={(deletedField) => {
        console.log({ deletedField })
      }}
      customFields={[
        {
          icon: null,
          type: "MY_CUSTOM_FIELD",
          title: 'Custom Field',
          renderIn: (
            <div>This is custom JSX in field container</div>
          )
        },
        {
          icon: null,
          type: "MY_CUSTOM_FIELD_2",
          title: 'Custom Field 2',
          options: true,
          renderIn: (
            <div>This is custom JSX in field container</div>
          )
        }
      ]}
    />
  )
}

export default App
