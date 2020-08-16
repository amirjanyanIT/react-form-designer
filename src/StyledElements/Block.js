import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  min-height: 60px;
  margin: 10px 0;
  padding: 15px 10px;
  box-shadow: 1px 1px 13px 0px #cac2c2;
  border-radius: 3px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #9c9c9c;
  }
  &.edit {
    &:hover {
      border: 1px solid transparent;
    }
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
  &.preview {
    cursor: move;
  }
`
