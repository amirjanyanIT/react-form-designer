import React, { useState, useEffect } from 'react'

import FormDesigner from 'react-form-designer'

const App = () => {
  const [fields, setFields] = useState([]);
  
  useEffect(() => console.log(fields), [fields])

  return (
    <FormDesigner
      fields={fields}
      onChange={(newFields) => setFields(newFields)}
    />
  )
}

export default App
