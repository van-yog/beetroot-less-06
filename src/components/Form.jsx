import {useState} from "react"
import { Label, Input, FromGroup, ButtonGroup, Button, Spinner, FullSpinner} from "./styles/app"

const initState = {email: "Hello Ivan", password: ""}

const Form = () => {
  const [data, setData] = useState(initState)
  const [loading, setLoading] = useState(false)

  const handleChange = ({target}) => {
    setData(x => {
      console.log("setData-x = ", x)
      return ({...x, [target.name]: target.value})
    })
  }

  const handleSubmit =  async e => {
    e.preventDefault();
    setLoading(true)
    console.log( loading)
    await new Promise(resolve =>setTimeout(()=>resolve(), 3000))
    setLoading(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      {loading&&<FullSpinner/>}
      <FromGroup >
        <Label htmlFor="email">Email</Label>
        <Input type="text" name="email" value={data.email} onChange={handleChange}/>
      </FromGroup>
      <FromGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="text" name="password" value={data.password} onChange={handleChange}/>
      </FromGroup>
      <ButtonGroup>
        <Button mr="10px" type="submit" onClick={handleSubmit}>
          Login {loading && <Spinner/>}
        </Button>
        <Button type="reset" onSubmit={handleSubmit}>
          Reset
        </Button>
      </ButtonGroup>
      
    </form>
  )
}

export default Form