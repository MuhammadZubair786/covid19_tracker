// import Chart from "./Components/Chart/Chart";
// import Cards from "./Components/Cards/Cards";
// import CountryPicker from "./Components/Countrypicker/Countrypicker";
import './App.css'
import {fetchData} from './api'
import React from "react";
import img from './images/img.png'
// import FooterNav from './Components/Footer/FooterNav'
// import {useState} from 'react'
import Mainpage from './main'
// @import "~bootstrap/scss/bootstrap";


class App extends React.Component{




    state = {
    data: {},
    country : '',


  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleChange = async (country) =>{
    const data = await fetchData(country);

    this.setState({
      data:data,
      country:country
    })
  }

  render(){

   
    return(
      // <div className='container'>
      //   <div class='row'>
      //     <div className='col col-lg-12'>
      //   <img src={img} className='img'/>

      //   </div>
      //   <br/>
      //   <div className='col col-lg-12' style={{marginTop:'290px'}}>
        <Mainpage data = {this.state.data} country={this.state.country}  handleChange={this.handleChange} />


      //   </div>
      //   </div>
         

       
  
      //   {/*<Cards data={this.state.data} />
      //   <CountryPicker handleChange={this.handleChange}/>
      //   <Chart data={this.state.data} country={this.state.country}/>

      //   <FooterNav/> */}
  
  
      // </div>
    )
  }
  
 

  }

  export default App;


 