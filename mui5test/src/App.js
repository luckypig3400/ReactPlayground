import Button from '@mui/material/Button'
// https://mui.com/zh/material-ui/getting-started/usage/
import { Typography } from '@mui/material'
// https://mui.com/zh/material-ui/api/typography/
import { Settings, Delete, Send } from '@mui/icons-material';
// https://mui.com/zh/material-ui/icons
// https://mui.com/material-ui/material-icons//
import ResponsiveDrawer from './components/ResponsiveDrawer';

function App() {
  return (
    <div>
      Hello MUI<br />
      {/* https://mui.com/zh/material-ui/react-button/#basic-button */}
      <Button variant="text">Text Button</Button>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>

      <Button variant="contained" color="success">Success Color</Button> <br />
      <Button variant="contained" disabled>Disabled</Button>

      <Button variant="contained" color="secondary" startIcon={<Settings />}>
        Setting
      </Button>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>

      <Typography variant="h3" component="p">
        It's use h3 style but it's a p tag :)
      </Typography>
      <ResponsiveDrawer>
      </ResponsiveDrawer>
    </div>
  );
}

export default App;
