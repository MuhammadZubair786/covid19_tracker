import Cards from "../Components/Cards/Cards";
import CountryPicker from "../Components/Countrypicker/Countrypicker";
import Chart from "../Components/Chart/Chart";
import Home from '../Components/Home/Home'


function  InfoPanel(props) {

    console.log(props)

    const data = props.data
    const country = props.country
    const handleChange = props.handleChange
    const screenConfig = props.screenConfig


    if(screenConfig==0){
        return(
            <Home/>
            
        )
    }

    if(screenConfig==1){
        return (
        <div>
        <CountryPicker  handleChange={handleChange} />
        <Cards data={data} />
        </div>
    
            )
     }

    else if(screenConfig==2){
        return (
            <div>
        <CountryPicker  handleChange={handleChange} />
        <Chart data={data} country={country} />
        </div>
            )
     }

     else{
         return null
     }

    
    return(
        <div>
            {/* <h1>zubair</h1> */}

          
      
           
        </div>

    )
    
}

export default InfoPanel