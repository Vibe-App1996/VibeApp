import { Stack, Button} from '@mui/material';


type VibeSelectProps = {
  addVibe: (vibeSelection: string) => void;
};


function VibeSelect({addVibe}: VibeSelectProps) {
    return (
      <Stack spacing={2} direction="column" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => addVibe("Serene")}
        >
          Serene 🌊
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addVibe("Anxious")}
        >
          Anxious 😰
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Euphoric")}
        >
          Euphoric 🌟
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Melancholic")}
        >
          Melancholic 🌧️
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Irritated")}
        >
          Irritated 😒
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Hopeful")}
        >
          Hopeful 🌱
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Overwhelmed")}
        >
          Overwhelmed 💥
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Grateful")}
        >
          Grateful 🙏
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Bored")}
        >
          Bored 😐
        </Button>
                <Button
          variant="contained"
          color="primary"
          onClick = {() => addVibe("Confident")}
        >
          Confident 🦁
        </Button>
  </Stack>
);
}

export default VibeSelect