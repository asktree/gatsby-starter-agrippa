/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ContextBase } from "./context"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../theme/CleanTheme"

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ContextBase>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextBase>
  )
}
