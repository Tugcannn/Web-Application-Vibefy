import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BillieEilish from '../../src/assets/images/png/billie-eilish.png';
import Ghostemane from '../../src/assets/images/png/ghostemane.png';
import Halsey from '../../src/assets/images/png/halsey.png';
import Şanışer from '../../src/assets/images/png/saniser.png';
import COPYCAT from '../../src/assets/musics/copycat.mp3';
import Mercury from '../../src/assets/musics/mercury.mp3';
import Nightmare from '../../src/assets/musics/nightmare.mp3';
import Susamam from '../../src/assets/musics/susamam.mp3';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    

    
  }));

function Angry() {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="row">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            COPYCAT
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Billie Eilish
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={COPYCAT}  controls/>     
                           
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        
                        image={BillieEilish} 
                        
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Mercury
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Ghostemane
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Mercury}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={Ghostemane}
                        
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Nightmare
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Halsey
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Nightmare}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={Halsey}
                        
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Susamam
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Şanışer ft. Fuat, Ados...
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Susamam}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Şanışer}
                       
                        title="Live from space album cover"
                    />
                </Card>
            </div>
        </div>    
    );
}

export default Angry;