import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ÖmerFarukBostan from '../../src/assets/images/png/ömer faruk bostan.jpg';
import Manga from '../../src/assets/images/png/manga.jpg';
import DuaLipa from '../../src/assets/images/png/dua lipa.jpg';
import Pendulum from '../../src/assets/images/png/pendulum.jpg';

import ErikDali from '../../src/assets/musics/erikdali.mp3';
import WeCouldBeTheSame from '../../src/assets/musics/we could be the same.mp3';
import NewRules from '../../src/assets/musics/NewRules.mp3';
import Witchcraft from '../../src/assets/musics/Witchcraft.mp3';



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

function Energetic() {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="row">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Erik Dalı
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Ömer Faruk Bostan
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={ErikDali}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {ÖmerFarukBostan}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            Witchcraft
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Pendulum
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Witchcraft}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Pendulum}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            We Could Be The Same
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Manga
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={WeCouldBeTheSame}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Manga}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            New Rules
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            Dua Lipa
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={NewRules}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {DuaLipa}
                        title="Live from space album cover"
                    />
                </Card>
            </div>
        </div>    
    );
}

export default Energetic;