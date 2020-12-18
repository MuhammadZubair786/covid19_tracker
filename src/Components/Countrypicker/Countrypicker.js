import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";
import './Countrypicker.css'
import { Fetchcountries } from "../../api";
import Corna from '../../images/img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function CountryPicker(props) {

    const [Fetchcountry, setcountry] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const data = await Fetchcountries()
            // console.log(data)
            setcountry(data)
            Aos.init({duration:2000})

        }

        fetchdata()
    }, [setcountry])


    // console.log("Fetch Country :",country)

    return (
        <div className='container-fluid'>
            <div className='row'>
           
                <div className='col col-lg-12 col-sm-12 col-md-12 col-12 text-center '>
                    <img src={Corna} style={{width:'300px'}}/>
                </div>
             
               
            </div>
            <div className='row'>
                <div className='col col-lg-3  col-md-2 col-sm-0 col-0'>
                </div>

                <div className='col col-lg-6   col-md-8 col-sm-8 col-12 text-center' style={{justifyContent:'center',}}>
                <div data-aos="flip-right">
                <FormControl className='formControl' style={{borderBottom:'2px solid blue',borderRadius: '20px'}}>
                <NativeSelect defaultValue='' onChange={(e)=>{props.handleChange(e.target.value)}}  >
                    <option value='' >Global</option>
                    {Fetchcountry.map((country,i)=>{
                        return(
                            <option value={country} key={i}>{country}</option>
                        )
                    })}

                </NativeSelect>
            </FormControl> 
            </div>
                  
                </div>
                <div className='col col-lg-3  col-md-2 col-sm-0 col-0'>
                </div>
               
            </div>
            
            {/* <FormControl className='formControl'>
                <NativeSelect defaultValue='' onChange={(e)=>{props.handleChange(e.target.value)}} style={{marginLeft:'40%',marginTop:'0%'}}>
                    <option value=''>Global</option>
                    {Fetchcountry.map((country,i)=>{
                        return(
                            <option value={country} key={i}>{country}</option>
                        )
                    })}

                </NativeSelect>
            </FormControl> */}
        </div>
    )
}


export default CountryPicker;