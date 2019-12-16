import {createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
      MuiOutlinedInput:{
        root:{
          borderRadius:20
        }
      },
      MuiInputBase:{
          root:{
              fontSize:20
          }
      }
    }
});  