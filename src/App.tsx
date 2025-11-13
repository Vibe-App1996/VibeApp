import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, ThemeProvider, CssBaseline, Button } from '@mui/material';
import {getVibes} from './api/salesforce'

function App() {
  const [count, setCount] = useState(0)

    const handleSubmit = async (e: React.FormEvent) => {
      try {
        await getVibes();
      } catch {
        console.log("Failure");
      }
  };
  

  return (
      <Box className="App" sx={{ height: '100vh', width: '100%', backgroundColor: 'background.default' }}>
              <Button onClick={() => { handleSubmit }}
      >
        Send Data
      </Button>
      </Box>
  );
}

export default App
