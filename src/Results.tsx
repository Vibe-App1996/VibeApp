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
    <Stack spacing={2} direction="column" alignItems="center" sx = {{width: "100%"}}>
        <Paper sx={{width: "100%", padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Vibes for today
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vibeItem}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#1976d2" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
        <Button variant="contained" color="primary" onClick={() => backPressCallback() }> Go back</Button>
    </Stack>
  );
}


export default ShowResults;