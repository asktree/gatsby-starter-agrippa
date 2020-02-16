import { createMuiTheme } from "@material-ui/core/styles"
import { red, grey, lightBlue, orange } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fff", contrastText: "#000" },
    secondary: { main: "#000", contrastText: "#fff" },
    background: { default: "#fff", paper: "#fff" },
  },
})

export default theme
