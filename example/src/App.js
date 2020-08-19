import React, { useState, useEffect } from 'react'

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
    />
  )
}

export default App
