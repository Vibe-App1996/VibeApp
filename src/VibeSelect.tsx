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
            <Typography variant="body1" sx={{ mb:3, color: "white" }}> What's the vibe? </Typography>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Serene")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Serene 🌊 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Anxious")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Anxious 😰 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Euphoric")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Euphoric 🌟 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Melancholic")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Melancholic 🌧️ </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Irritated")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Irritated 😒 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Hopeful")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Hopeful 🌱 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Overwhelmed")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Overwhelmed 💥 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Grateful")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Grateful 🙏 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Bored")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Bored 😐 </Button>
            <Button variant="outlined"color="primary" onClick={() => addVibe("Confident")} sx={{borderWidth: "3px", borderColor: "white", color: "white"}}> Confident 🦁 </Button>
          </Stack>
        </Box>

  );
}

export default VibeSelect