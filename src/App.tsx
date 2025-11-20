import './App.css'
import { addVibe} from './api/salesforce'
import type {Vibe} from './api/salesforce'
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import { useState } from 'react';
import VibeSelect  from './VibeSelect'
import ShowResults from './Results'

type ScreenState = 'vibeselect' | 'results';
function App() {

  const [screenState, setScreenState] = useState<ScreenState>('vibeselect');

  const addVibeRepoCall = async (vibeSelected: string) => {
      try {
        const vibe: Vibe = {vibeName: vibeSelected};
        return await addVibe(vibe)
      } catch (e) {
        console.log("Failure")
      }
  }

  const vibeAddCallback = (vibeSelected: string) => {
    addVibeRepoCall(vibeSelected).then(_ => {setScreenState('results')})
  };

  const onBackClick = () => {
      console.log("back clicked from Results")
      setScreenState('vibeselect')
  }


  const theme = createTheme();
  const renderPage = () => {
    switch(screenState) {
      case 'vibeselect':
        return <VibeSelect addVibe = {vibeAddCallback}/>
      case 'results':
        return <ShowResults vibeItem = {[]} backPressCallback = {onBackClick}/>
    }
  }

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width:'100vw'
        }}
      >
        {renderPage()}
      </div>
    </ThemeProvider>
  )
}

export default App
