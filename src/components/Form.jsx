import {useState} from "react"
import { createGlobalStyle } from "styled-components"
import { Label, Input, FromGroup, ButtonGroup, Button} from "./styles/app"

const initState = {email: "Hello Ivan", password: ""}

const Form = () => {
  const [data, setData] = useState(initState)

  const handleChange = ({target}) => {
    setData(x => {
      console.log("setData-x = ", x)
      return ({...x, [target.name]: target.value})
    })
  }

  const handleSubmit =  e => {
    e.preventDefault();
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <FromGroup >
        <Label htmlFor="email">Email</Label>
        <Input type="text" name="email" value={data.email} onChange={handleChange}/>
      </FromGroup>
      <FromGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="text" name="password" value={data.password} onChange={handleChange}/>
      </FromGroup>
      <ButtonGroup>
        <Button mr="10px" type="submit" onSubmit={handleSubmit}>
          Login
        </Button>
        <Button type="reset" onSubmit={handleSubmit}>
          Reset
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default Form