import Img from '../../images/image.png'
import Button from '@material-ui/core/Button';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function Home() {

    useEffect(()=>{
        Aos.init({duration:2000})

    },[])
    return (
        <div className='container-fluid' >
            <div className='row'>
                <div className='col col-lg-8' style={{ marginTop: '15%', marginLeft: '5%' }}>
                <div data-aos="fade-down">
                    <img src={Img} style={{ width: '35%' }} alt='Corana Viruse Image' />
                   
                   </div>
                   <div data-aos="fade-up"> <p>COVID-19 is a serious global infectious disease<br />
                        that is affecting 218 countries and territories around<br />
                        the world and 2 international conveyances.</p>
                        </div>
                        <div data-aos="fade-up-left">
                        <Button variant="contained" color="secondary"  style={{borderRadius:'20px'}}>
                            <a href='https://www.who.int/health-topics/coronavirus#tab=tab_1' target="_blanks" style={{textDecoration:'none',color:'white'}}>Read More</a>
                        </Button>
                        </div>
                </div>

              
            </div>



        </div>
    )
}

export default Home