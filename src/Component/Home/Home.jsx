import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Cardinfo from '../Cardinfo/Cardinfo';
import styled from 'styled-components'


const ButtonLink = styled.button
`
    color: white;
     width: 70px;
     height: 30px;
     border:none;
     border:solid 2px white;
     border-radius: 5px;
     background: rgba(255, 255, 255,0);
     font-size: 10px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'roboto',
          fontWeight: 70,
    },

    Cardinfo: {
        //margin:'150px 0px 0px 300px',
        
        
    }
  }));


export default function Header(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#58ABF6' }}>
                <Toolbar >
                    <Typography  className={classes.title}>
                        Kelompok 33
                    </Typography>
                    <ButtonLink>
                            Link
                    </ButtonLink>
                    <ButtonLink >
                            Link
                    </ButtonLink>
                </Toolbar>
            </AppBar>
            <div className={classes.Cardinfo} >
                <center>
                <Cardinfo />
                </center>
                
            </div>
        </div>
       
    )
}

