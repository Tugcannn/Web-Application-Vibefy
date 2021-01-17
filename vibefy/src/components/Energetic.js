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

    return (
        <div className="card-group">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            <i>Erik Dalı</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Ömer Faruk Bostan</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={ErikDali}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {ÖmerFarukBostan}
                        title="Erik Dalı"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            <i>Witchcraft</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Pendulum</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={Witchcraft}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Pendulum}
                        title="Witchcraft"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            <i>We Could Be The Same</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Manga</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={WeCouldBeTheSame}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {Manga}
                        title="We Could Be The Same"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                            <i>New Rules</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Dua Lipa</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={NewRules}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image= {DuaLipa}
                        title="New Rules"
                    />
                </Card>
            </div>
        </div>    
    );
}

export default Energetic;