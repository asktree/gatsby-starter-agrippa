import React from "react"

type ContextProps = {
  prop1: string
  setProp1: (string) => void
}
const Context = React.createContext<Partial<ContextProps>>({})

type Props = {
  children: React.ReactNode
}

export const ContextBase = ({ children }: Props) => {
  const [prop1, setProp1] = React.useState("foo")

  return (
    <Context.Provider value={{ prop1, setProp1 }}>{children}</Context.Provider>
  )
}

export default Context
