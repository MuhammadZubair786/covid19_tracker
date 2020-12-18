import {useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import  './Chart.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const  Chart = (props)=>{

    const [dailydata,setDailyData]=useState({})

    const data = props.data
    const country = props.country
    console.log('Data : =>',data)
    if(country){
    console.log('Country  : =>',country)
    }
    // console.log("Data :",props.data,props.country)
     
    useEffect(()=>{
        const fetchApi = async () =>{
        
        // const data = await fetchDailyData()

        // console.log("DATA GET IN CHART :",data)

        setDailyData(await fetchDailyData())
        Aos.init({duration:2000})
            
        }

        fetchApi()
    },[])

    const lineChart = (
        dailydata.length?<Line
        data={{
            labels:dailydata.map(({date})=>date),
            datasets:[{
                data:dailydata.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailydata.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                fill:true

                 
            }]
        }}
        />
        :
        null
    )


    console.log(data.confirmed,data.recovered,data.deaths)

const barChart=(
    data.confirmed
    ?(
        <Bar 

        height={150}
        data={{
            labels:['Infected','Recovered','deaths'],
            datasets:[{
                label:'people',
                backgroundColor:[
                    'rgba(0,0,255,0.5)'
                    ,'rgba(30, 255, 0, 0.5)'
                    , 'rgba(255, 7, 7, 0.5)'
                ]
                ,
                data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                
            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current State In ${country}`}
        }}
        
        
        />
    )
    : null
)


    return(
        <div className='container'>
            <div className='row'>
            <div data-aos="fade-down">
                <div className='col col-lg-12 col-md-12 col-12 col-sm-12' style={{width:'500px',marginLeft:'10%'}}>
                {country ? barChart : lineChart}
            </div>

                </div>
            </div>
            
        </div>
        
    )
}

export default Chart;