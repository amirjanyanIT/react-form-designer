import styled from 'styled-components'

export default styled.div`
  position: relative;
  display: flex;
  height: 60px;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
  &:before {
    content: 'Drag file here';
    font-size: 12px;
  }
`
