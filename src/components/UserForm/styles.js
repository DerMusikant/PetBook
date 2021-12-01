import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px black;
  color: red;
`

export const Title = styled.h2`
  margin: 5px;
  color: black;
`

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  &:focus{
    border: 1px solid blue;
    box-shadow: 1px 1px 5px lightblue;
  }
`

export const Button = styled.input`
  width: 90%;
  color: white;
  border: none;
  padding: 10px;
  background-color: #1877f2;
  border-radius: 5px;
  margin: 5px;
  &:hover{
    background-color: #29487d;
    cursor: pointer;
  }
`
