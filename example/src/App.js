import React, { useState, useEffect } from 'react'

import { ExampleComponent } from 'form-designer'

const App = () => {
  const [fields, setFields] = useState([]);
  
  useEffect(() => console.log(fields), [fields])

  return (
    <ExampleComponent
      fields={fields}
      onChange={(newFields) => setFields(newFields)}
    />
  )
}

export default App
