/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import Counter from "./components/Counter"
import Form from "./components/Form"
import {NewButton, Button} from './components/styles/counter'
import {WrapApp} from "./components/styles/app"
import {yellow, green, gray} from "./components/styles/colors"
import * as mq from "./components/styles/mq"


function App() {
  return (
    <WrapApp>
      <div css={{
        backgroundColor: gray,
        padding: "10px",
        [mq.small]: {
          backgroundColor: yellow
        },
        [mq.medium]: {
          backgroundColor: green
        }
      }}

        className="row" >
        <Counter>
          {({count, increment, decrement}) => (
            <>
              <h1>Counter: {count}</h1>
              <Button marginRight="10px"  onClick={increment}>
                Increment
              </Button>
              <Button marginRight="10px"  onClick={decrement}>Decrement</Button>
            </>
          )}
        </Counter>

        <div className="row">
          <Form />
        </div>
     </div>
   </WrapApp>
  )
}

export default App