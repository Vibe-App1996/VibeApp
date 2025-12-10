import { Paper, Typography, ThemeProvider, createTheme, Stack, Button} from '@mui/material';
import type VibeResponse from './api/salesforce'
import {getVibes} from './api/salesforce'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from 'react';



var vibeResponse: VibeResponse[] = [];
export type VibeResponseProps = {
    vibeItem: VibeResponse[],
    backPressCallback: () => void;  
}



function ShowResults({backPressCallback}: VibeResponseProps) {
    const [loading, setIsLoading] = useState<Boolean>(true);
    
    const renderPage = () => {
     switch(loading) {
        case true:
            return <MyBarChart vibeItem = {[]}  backPressCallback={backPressCallback}/>
        case false:
            return <MyBarChart vibeItem = {vibeResponse} backPressCallback={backPressCallback}/>
    }
}
    getVibes().then(response => {
        vibeResponse = response;
        setIsLoading(false);
    }).catch(error => console.log("Got an error " + error))

    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            {renderPage()}
        </ThemeProvider>
    );
}



function MyBarChart({vibeItem, backPressCallback}: VibeResponseProps) {

  return (
    <Stack spacing={2} direction="column" alignItems="center" sx = {{width: "100vw", height:"100vh", background:"#785F34"}}>
        <Paper sx={{width: "100%", padding: 2, background:"transparent" }}>
            <Typography variant="h6" color="white" gutterBottom>
                Vibes for today
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vibeItem}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: 'white'}}  />
                <YAxis tick={{ fill: 'white'}} />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#1976d2" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
        <Button variant="outlined" color="primary" onClick={() => backPressCallback() } sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Go back</Button>
            <Typography variant="body1" color="white" gutterBottom>
                    What's the vibe is made by an unemployed software developer. <br />
                    If you would like to donate 🙏: <a href="https://www.buymeacoffee.com/tiktoklates" target="_blank" rel="noopener noreferrer"> Click here</a> <br />
                    If you would like to hire to make a website 💻: <a href="mailto:unemployedengineersince2025@gmail.com">Email Me</a><br />
                    I also do social media consulting with over 200K subs 📱: <a href="https://www.youtube.com/@megapintcollections531/shorts" target="_blank" rel="noopener noreferrer"> Mega Pint Collections </a>    
            </Typography>
    </Stack>
  );
}


export default ShowResults;