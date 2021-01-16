import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import Macklemore from '../../src/assets/images/png/Macklemore.jpg';
import PharrellWilliams from '../../src/assets/images/png/pharrell_williams.jpg';
import ManuşBaba from '../../src/assets/images/png/manuşbaba.jpg';
import MurdaandEzhel from '../../src/assets/images/png/ezel_murda.png';

import Cant from '../../src/assets/musics/cantholdus.mp4';
import happyx from '../../src/assets/musics/happy.mp4';
import EteğiBelinde from '../../src/assets/musics/etegibelinde.mp4';
import Aya from '../../src/assets/musics/aya.mp4';


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
      width: 150,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
   
  }));

function Happy() {

    const classes = useStyles();
    const theme = useTheme();

    return (
       
        <div className="row">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Can't Hold Us 
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Macklemore and Ryan Lewis
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Cant}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Macklemore}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Happy
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Pharrell Williams
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={happyx}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {PharrellWilliams}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Eteği Belinde
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Manuş Baba
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={EteğiBelinde}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {ManuşBaba}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            AYA
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Murda and Ezhel
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Aya}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {MurdaandEzhel}
                        title="Live from space album cover"
                    />
                </Card>
            </div>
           
        </div>   
       
    );
}

export default Happy;