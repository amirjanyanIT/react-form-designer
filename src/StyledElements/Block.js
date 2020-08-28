import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  min-height: 120px;
  margin: 10px 0;
  padding: 15px 10px;
  box-shadow: 1px 1px 13px 0px #cac2c2;
  border-radius: 3px;
  background-color: white;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #c1bbbb;
  }
  &.edit {
    &:hover {
      border: 1px solid transparent;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &.preview {
    cursor: move;
  }
  .describe-button {
    color: #06bb89;
  }
  .trash-button {
    color: #a24664 !important;
  }
`
