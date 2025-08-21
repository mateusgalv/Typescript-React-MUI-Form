import { Box, Container, Paper } from "@mui/material";
import Form from "./components/Form";

function App() {

  return (
    <div className="App">
      <Container sx={{ 'width': '500px'}}>
        <Paper elevation={12}>
          <Form />
        </Paper>
      </Container>
    </div>
  )
}

export default App
