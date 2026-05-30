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
            <Typography variant="h3" fontWeight={700} sx={{ mb:3, color: "black" }}> Something? </Typography>
            <Button variant="contained"color="primary" onClick={() => addVibe("Jesus")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Jesus 😇 </Button>
            <Button variant="contained"color="primary" onClick={() => addVibe("Devil")} sx={{borderWidth: "3px", backgroundColor: "black", color: "white"}}> Devil 😈 </Button>
          </Stack>
        </Box>

  );
}

export default VibeSelect