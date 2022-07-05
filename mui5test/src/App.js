import Button from '@mui/material/Button'
// https://mui.com/zh/material-ui/getting-started/usage/

import { Settings, Delete, Send } from '@mui/icons-material';
// https://mui.com/zh/material-ui/icons
// https://mui.com/material-ui/material-icons//

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
    </div>
  );
}

export default App;
