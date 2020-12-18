import { Card, CardContent, Typography } from '@material-ui/core'
import './Cards.css'
import CountUp from 'react-countup'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {

    const classes = useStyles();

    if (!confirmed) {
        return 'Loading...';
    }

    console.log('CASES CONFIRMED :', confirmed.value)
    console.log('CASES RECOVERED :', recovered.value)
    console.log('CASES DEATH  :', deaths.value)
    console.log('Last Update :', lastUpdate)

    return (
        <div className='container-fluid'>
            <div className='row' style={{marginTop:'-20px'}}>
                <div className='col col-lg-1 col-md-12 col-sm-12 col-12'>

                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12 col-12 text-center' style={{marginTop:'10px'}} >
                <div data-aos="zoom-in">
                    <div className="card infected" style={{ width: '100%',borderRadius: '10px' }}>

                        <div className="card-body">
                            <Typography color="textSecondary" gutterBottom><b>Infected</b></Typography>
                            <h3 className="card-title">
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </h3>
                            <Typography color="textSecondary" style={{ fontWeight: 'bold' }}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2' className='text_hid'>Number of active cases of COVID19</Typography>

                        </div>
                    </div>
                    </div>
                </div>
                <div className='col col-lg-3  col-md-6 col-sm-12 col-12  text-center'  style={{marginTop:'10px'}} >
                <div data-aos="fade-up-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <div className="card recovered" style={{ width: '100%', borderRadius: '10px' }}>
                    
                        <div className="card-body">
                            <Typography color="textSecondary" gutterBottom><b>Recovered</b></Typography>
                            <h3 className="card-title">
                                <CountUp
                                    start={0}
                                    end={recovered.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </h3>
                            <Typography color="textSecondary" style={{ fontWeight: 'bold' }}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2' className='text_hid'>Number of Recovered from COVID19</Typography>


                        </div>
                    </div>
                    </div>
                </div>

                <div className='col col-lg-3  col-md-6 col-sm-12 col-12 text-center' style={{marginTop:'10px'}}  >
                <div data-aos="fade-down">
                    <div className="card deaths" style={{ width: '100%', borderRadius: '10px' }}>

                        <div className="card-body">
                            <Typography color="textSecondary" gutterBottom><b>Deaths</b></Typography>
                            <h3 className="card-title">
                                <CountUp
                                    start={0}
                                    end={deaths.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </h3>
                            <Typography color="textSecondary" style={{ fontWeight: 'bold' }}>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'  className='text_hid'>Number of death cased by COVID19</Typography>

                        </div>
                    </div>
                    </div>
                </div>

                {/* <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID19</Typography>


                    </CardContent> */}





                {/* <div className='col col-lg-4'  className='main recovered card' style={{float:'right'}}>
               
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID19</Typography>


                    </CardContent>

            
                   
                </div>
                <div className='col col-lg-4'  className='main recovered card'>
               
               <CardContent>
                   <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                   <Typography variant='h5' >
                       <CountUp
                           start={0}
                           end={recovered.value}
                           duration={2.5}
                           separator=','
                       />
                   </Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography variant='body2'>Number of active cases of COVID19</Typography>


               </CardContent>

       
              
           </div> */}
            </div>


            {/* <Grid container spacing={3} justify='center'>
                
                <Grid item component={Card} xs={12} md={3} className='main recovered'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Recovered from COVID19</Typography>


                    </CardContent>

                </Grid> */}
            {/* <Grid item component={Card}  xs={12} md={3} className='main deaths'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5' >
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />

                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of death cased by COVID19</Typography>


                    </CardContent>

                </Grid> */}


        </div>
    )
}


export default Cards;