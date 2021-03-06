/** @jsxImportSource @emotion/react */
import {jsx, keyframes} from "@emotion/react"

import styled from "@emotion/styled/macro"
import * as colors from "./colors"
import * as mq from "./mq"
import {FaSpinner} from "react-icons/fa"

export function FullSpinner() {
  return (
    <div
      css={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  )
}

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
})

export const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  "aria-label": "loading",
}

export const ButtonGroup = styled.div({
  padding: "0.5rem 0",
})

export const Button = styled.div(
  ({mr}) => ({
    padding: "6px 1rem",
    border: 0,
    background: "#2a82b5",
    color: colors.white,
    transition: "all 1s",
    marginBottom: "1rem",
    cursor: "pointer",
    borderRadius: "10px",
    textTransform: "uppercase",
    backgroundColor: colors.danger,
    marginRight: mr ? mr : "",
    "&:hover": {
      backgroundColor: colors.dangerHover,
    },
    [mq.small]: {
      padding: ".8rem 1rem",
      backgroundColor: colors.primary,
    },
    [mq.medium]: {
      backgroundColor: colors.yellow,
    },
    [mq.large]: {
      backgroundColor: colors.green,
    },
  }),
  ({type}) => ({
    background: type === "reset" ? colors.danger : colors.primary,
    "&:hover": {
      backgroundColor:
        type === "reset" ? colors.dangerHover : colors.primaryHover,
    },
  }),
)

export const WrapApp = styled.div`
  max-width: 1200px;
  margin: 1rem auto 0;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`
export const Input = styled.input({
  display: "block",
  width: "100%",
  padding: "0.6rem",
  marginBottom: "1rem",
  border: "2px solid grey",
  "border-radius": "10px",
  borderRadius: "5px",
})

export const FromGroup = styled.div({
  marginBottom: "1rem",
})
