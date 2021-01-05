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
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 10px rgba(22, 102, 120, 0.31);
    color: #166678;
    background-color: #f7b924;
    color: #212529;
  }
  .icon {
    margin-right: 15px;
  }
`
