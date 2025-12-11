import { Button, Box, Stack, Typography} from '@mui/material';
import bgVideo from './assets/bg-video.mp4';



type VibeSelectProps = {
  addVibe: (vibeSelection: string) => void;
};


function VibeSelect({addVibe}: VibeSelectProps) {
    return (
      <Box
        sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        }}
      >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            gap: "16px",
            objectFit: "cover"
        }}>
            <source src={bgVideo} type="video/mp4"/>
        </Box>
          <Stack spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
          >
            <Typography variant="body1" sx={{ mb:3, color: "black" }}> What's the vibe? </Typography>
            <Button variant="contained"color="primary" onClick={() => addVibe("Grinchy")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Grinchy 😈 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Melancholic")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Melancholic 🌧️ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Bittersweet")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Bittersweet 🍬 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Somber")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Somber 🕯️ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Reflective")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Reflective 🤔 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Nostalgic")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Nostalgic 🎄 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Hopeful")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Hopeful ✨ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Warm")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Warm ☕ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Festive")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Festive 🎉 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Joyful")} sx={{borderWidth: "3px", backgroundColor: "black", color: "black"}}> Joyful 😄 </Button>
          </Stack>
        </Box>

  );
}

export default VibeSelect