import Chart from "./Components/Chart/Chart";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/Countrypicker/Countrypicker";
// import './App.css'
import React ,{useState} from "react";
import img from './images/img.png'
import FooterNav from './Components/Footer/FooterNav'
import InfoPanel from "./Components/InfoPanel";



function Mainpage(props) {

    const screenConfig = useState(0);

    const data = props.data
    const country = props.country
    const handleChange = props.handleChange

    console.log("DATA FROM APP.JS :", data)
    console.log("Country Data For : ", country)

    



    return (
        <div className='container-fluid'>
        
          

            <InfoPanel screenConfig={screenConfig[0]}  data={data}  handleChange={handleChange} country={country}/>

            {/* <Cards data={data} />
            <CountryPicker handleChange={handleChange} />
            <Chart data={data} country={country} /> */}

            <FooterNav screenConfig={screenConfig} />


        </div>
    )
}

export default Mainpage;