import axios from  'axios'



const url = 'https://covid19.mathdro.id/api'


export const fetchData = async (country)=>{
    // console.log(country)

    let changeurl =url
    if(country){
        changeurl =`${url}/countries/${country}`
    }



    try {

        // const {data} = await axios.get(url)

        // const impdata ={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }

        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeurl)


        // const impdata={
        //     confirmed:confirmed,
        //     recovered:recovered,
        //     deaths:deaths,
        //     lastUpdate:lastUpdate
        // }

        const impdata={
            confirmed,
                recovered,
                deaths,
                lastUpdate,
        }

        return impdata



    }
    catch(error){

    } 
    
}


export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);

        // console.log("Fetch data :",data)
        const modifiedData = data.map((dailyDate)=>({
            confirmed:dailyDate.confirmed.total,
            deaths: dailyDate.deaths.total,
            date:dailyDate.reportDate
        }))

        // console.log("MODIFY DATA :",modifiedData)

        return modifiedData
    }
    catch(error){
        console.log(error)

    }
}



export const Fetchcountries = async()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);

        // console.log("fetch data",data)

        // countries.map((country)=>{
        //     console.log(country.name)
        // })

        return countries.map((country)=>country.name)

       
       
    }
    catch(error){
        console.log(error)

    }
}