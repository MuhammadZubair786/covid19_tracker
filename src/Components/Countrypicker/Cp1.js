import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from "@material-ui/core";
import './Countrypicker.css'
import { Fetchcountries } from "../../api";

function CountryPicker(props){

    const [Fetchcountry,setcountry] = useState([]) 


    useEffect(()=>{
        const fetchdata = async () =>{
            const data = await Fetchcountries()
            // console.log(data)
            setcountry(data)

        }

        fetchdata()
    },[setcountry])


    // console.log("Fetch Country :",country)

    return(
        <div>
            <FormControl className='formControl'>
                <NativeSelect defaultValue='' onChange={(e)=>{props.handleChange(e.target.value)}} style={{marginLeft:'40%',marginTop:'0%'}}>
                    <option value=''>Global</option>
                    {Fetchcountry.map((country,i)=>{
                        return(
                            <option value={country} key={i}>{country}</option>
                        )
                    })}

                </NativeSelect>
            </FormControl>
        </div>
    )
}


export default CountryPicker;