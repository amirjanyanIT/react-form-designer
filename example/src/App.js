import React from 'react'

import { ExampleComponent } from 'form-designer'

const App = () => {
  return (
    <ExampleComponent
      value={null}
      onChange={(newForm) => console.log(newForm)}
    />
  )
}

export default App
