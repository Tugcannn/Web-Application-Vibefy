import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import mehmeterdem from '../../src/assets/images/png/mehmet-erdem.jpg';
import Cem_Karaca from '../../src/assets/images/png/Cem_Karaca.jpg';
import muslumgurses from '../../src/assets/images/png/muslumgurses.jpg';
import paul_dwyer from '../../src/assets/images/png/paul_dwyer.jpg';


import herkesaynihayatta from '../../src/assets/musics/herkesaynihayatta.mp3';
import odamkirec from '../../src/assets/musics/odamkirec.mp3';
import nilüfer from '../../src/assets/musics/nilüfer.mp3';
import denizüstüköpürür from '../../src/assets/musics/denizüstüköpürür.mp3';


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

function Sad() {


    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="row">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Herkes Aynı Hayatta
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mehmet Erdem
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                           
                        <ReactAudioPlayer src={herkesaynihayatta}  controls/>     
                           
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}

                        image={mehmeterdem}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Odam Kireç Tutmuyor
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Cem Karaca
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={odamkirec} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={Cem_Karaca}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Nilüfer
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Müslüm Gürses
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={nilüfer} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={muslumgurses}
                        title="Live from space album cover"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Deniz Üstü Köpürür
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Paul Dwyer
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>                                        
                            <ReactAudioPlayer src={denizüstüköpürür}  controls/>                                                                              
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={paul_dwyer}
                       
                        title="Live from space album cover"
                    />
                </Card>
            </div>
        </div>
    );
}

export default Sad;