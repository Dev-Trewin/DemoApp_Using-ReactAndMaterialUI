import { createTheme } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';
//we can customize the color with the palette for example 
//define a name for color.
const arcBlue="#0B72B9";
const arcOrange="#FFBA60";


const theme = createTheme({
  palette: {
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography:{
    h3:{
      fontWeight:300
    }
  }
});
// //With out customize palette color//
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//     secondary: {
//       main: blue[500],
//     },
//   },
// });
export default theme;