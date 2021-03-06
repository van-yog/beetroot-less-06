import styled from "styled-components"

export const Button = styled.button`
  padding: 10px;
  border: 1px solid blue;
  color: white;
  background: darkgrey;
  margin-right: ${props=> {
    console.log("margin-right=", props.marginRight)
    return props.marginRight || 0}};

  $hover {
    cursor: pointer;
     box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5)
  }
`

console.log("BUTTON=",Button);

export const NewButton = styled(Button)`
background: black;
margin-bottom: 20px;
`