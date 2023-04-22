import {  ThemeProvider } from "styled-components"
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar"
import { LeftSidebarProvider } from "./context/LeftSidebarContext"
import { theme } from "./theme/GlobalStyles/theme"
import { GlobalStyles } from "./theme/GlobalStyles/GlobalStyles"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LeftSidebarProvider>
      <LeftSidebar />
    </LeftSidebarProvider>
    </ThemeProvider>
  )
}
export default App
