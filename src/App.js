import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MyRoutes from './routes/MyRoutes';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Outfit",
    ]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
