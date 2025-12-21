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
            <Typography variant="body1" fontWeight={700} sx={{ mb:3, color: "black" }}> What's the vibe? </Typography>
            <Button variant="contained"color="primary" onClick={() => addVibe("Grinchy")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Grinchy 😈 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Melancholic")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Melancholic 🌧️ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Bittersweet")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Bittersweet 🍬 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Somber")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Somber 🕯️ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Reflective")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Reflective 🤔 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Nostalgic")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Nostalgic 🎄 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Hopeful")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Hopeful ✨ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Warm")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Warm ☕ </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Festive")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Festive 🎉 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Joyful")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Joyful 😄 </Button>
          </Stack>
        </Box>

  );
}

export default VibeSelect