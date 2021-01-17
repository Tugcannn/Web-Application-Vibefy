import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

    return (
        <div className="card-group">
            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                <i>Herkes Aynı Hayatta</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Mehmet Erdem</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={herkesaynihayatta}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={mehmeterdem}
                        title="Herkes Aynı Hayatta"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                <i>Odam Kireç Tutmuyor</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Cem Karaca</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={odamkirec} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={Cem_Karaca}
                        title="Odam Kireç Tutmuyor"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                <i>Nilüfer</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Müslüm Gürses</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                        <ReactAudioPlayer src={nilüfer} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={muslumgurses}
                        title="Nilüfer"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                <i>Deniz Üstü Köpürür</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Paul Dwyer</i>
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>                                        
                            <ReactAudioPlayer src={denizüstüköpürür}  controls/>                                                                              
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={paul_dwyer}
                        title="Deniz Üstü Köpürür"
                    />
                </Card>
            </div>
        </div>
    );
}

export default Sad;