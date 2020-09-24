import React, { useContext } from 'react'
import Context from '../Context'
import styled from 'styled-components'
import options from '../optionTitles'

const Container = styled.div`
  display: flex;
  height: 18px;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
  .icon {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`

const OptionTitle = ({ type }) => {
  const [, , , , , , , customFields] = useContext(Context)

  const pOptions = [
    ...customFields,
    ...options.filter(
      (option) => !customFields.some((cOption) => cOption.type === option.value)
    )
  ]
  const currentOption = pOptions.find(
    (pOption) => type === (pOption.type || pOption.value)
  )

  return (
    <Container>
      {currentOption.icon && <div className='icon'>{currentOption.icon}</div>}
      <div className='label'>{currentOption.label || currentOption.title}</div>
    </Container>
  )
}

export default OptionTitle
