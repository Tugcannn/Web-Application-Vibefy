import React from 'react' 
import './Page.css';
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

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     details: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     content: {
//       flex: '1 0 auto',
//     },
//     cover: {
//       width: 150,
//     },
//     controls: {
//       display: 'flex',
//       alignItems: 'center',
//       paddingLeft: theme.spacing(1),
//       paddingBottom: theme.spacing(1),
//     },
// }));

function Happy() {

    // const classes = useStyles();

    return (
       
        <div className="card-group">
            <div className="col-sm-3">
                <Card className="root">
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Can't Hold Us</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Macklemore and Ryan Lewis</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Cant}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {Macklemore}
                        title="Can't Hold Us"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className="root">
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Happy</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Pharrell Williams</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={happyx}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {PharrellWilliams}
                        title="Happy"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className="root">
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Eteği Belinde</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Manuş Baba</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={EteğiBelinde}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {ManuşBaba}
                        title="Eteği Belinde"
                    />
                </Card>
            </div>

            <div className="col-sm-3">
                <Card className="root">
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>AYA</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Murda and Ezhel</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Aya}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {MurdaandEzhel}
                        title="AYA"
                    />
                </Card>
            </div>
        </div>   
    );
}

export default Happy;