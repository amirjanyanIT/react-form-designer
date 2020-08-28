import styled from 'styled-components'

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 1px solid transparent;
  background-color: white;
  height: 35px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 1px 1px 5px #d8d8d8;
  color: #4a4a4a;
  &:hover {
    box-shadow: 1px 1px 10px rgb(166 198 234);
  }
  .icon {
    margin-right: 15px;
  }
`
