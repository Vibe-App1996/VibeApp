import './App.css'
import { Box, Button } from '@mui/material';
import {getVibes} from './api/salesforce'

function App() {
  //const [count, setCount] = useState(0)

    const handleSubmit = async () => {
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
