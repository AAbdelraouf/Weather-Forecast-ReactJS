import React, { Component } from 'react';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    inputValue: '',
    fiveDaysWeatherData:[],

    dateArray:[],
    tempArray:[],
    humidityArray:[],
    descriptionArray:[],
    fourthArray:[],
    fifthArray:[],
    sixthArray:[],
  }
}

// Fetching data from openweathermap.org //
fetchWeatherData = () => {
  const inputValueFromState = this.state.inputValue

  if(inputValueFromState === ''){alert('Type City Name')}
  else{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputValueFromState},us&type=accurate&APPID=e633b27daa20843e58a2a0be42b81399&cnt=6`)
   .then(response => response.json())
   .then(data => { 
this.setState({ inputValue:'', fiveDaysWeatherData: data,  });

const weatherInfo = this.state.fiveDaysWeatherData

for (var key in weatherInfo.list){
  // Storing data into the state.
  this.setState( previousState => ({ 
    dateArray:[...previousState.dateArray, weatherInfo.list[key].dt_txt],
    tempArray:[...previousState.tempArray, weatherInfo.list[key].main.temp],
    humidityArray:[...previousState.humidityArray, weatherInfo.list[key].main.humidity],
    descriptionArray:[...previousState.descriptionArray, weatherInfo.list[key].weather[0].description],
  }))
}}).catch(error => console.log(error))}};


// storing the input value in state
handleChange = (event) => { this.setState({inputValue: event.target.value})}

  render() {    
    return (
      <div style={styles.mainDiv}>

      <div>
        <div style={styles.container}>
        <input style={styles.inputStyle}  
        value={this.state.inputValue} type="text" placeholder="Enter City" 
        onChange={this.handleChange} />
        <br/>
        <br/>
        <button style={styles.submitButtonStyle} onClick={this.fetchWeatherData}> submit </button>
        <br/><br/><br/>
      </div>

      {/* Main Temperature section */}
       <div>
        <h1 style={styles.weatherTemperature}>
        {this.state.tempArray[0]}
        </h1>
        <p style={styles.rightSideStatus}> 
        {this.state.descriptionArray[0]}
        <br/>
        { this.state.humidityArray[0]}
        </p>
      </div>

      {/* Footer weather section */}
      <div style={styles.footerStyle}>
      <div style={styles.firstFooterSection}>

      <br/>
      { this.state.descriptionArray[1]}
      <br/>
      { this.state.tempArray[1]}
      <br/>
      { this.state.humidityArray[1]} 
      
      </div>


      <div style={styles.secondFooterSection} >
      <br/>
      { this.state.descriptionArray[2]}
      <br/>
      { this.state.tempArray[2]}
      <br/>
      { this.state.humidityArray[2]}
      </div>
  

      <div style={styles.thirdFooterSection} >
      <br/>
      { this.state.descriptionArray[3]}
      <br/>
      { this.state.tempArray[3]}
      <br/>
      { this.state.humidityArray[3]}
      </div>

      <div style={styles.fourthFooterSection} >
      <br/>
      { this.state.descriptionArray[4]}
      <br/>
      { this.state.tempArray[4]}
      <br/>
      { this.state.humidityArray[4]}  
      </div>

      <div style={styles.fivthFooterSection} >
      <br/>
      { this.state.descriptionArray[5]}
      <br/>
      { this.state.tempArray[5]}
      <br/>
      { this.state.humidityArray[5]}
      </div>

  </div>

    <div style={styles.mainDivOfImages} >
      <div style={styles.bigSizeCloud}>
      <img src={cloud1} alt="logo1" />
      </div>
      <div style={styles.smallSizeCloud} >
      <img src={cloud2} alt="logo2" />
      </div>    
      </div>

    </div>

  </div>
    );
  }
}

export default App;

const styles = { 
mainDiv:{
    width: '100%', 
    height: '960px', 
    background: 'linear-gradient(to top,  #183968, #4A90E2)'},

container:{
    position:'relative',
    left:'20%',
    top:'95px',
    height:'460px',
    width:'50%',
    backgroundColor:'#448CE2',
    borderRadius: '3%'},

inputStyle:{
    position:'absolute',
    top:"20px",
    left: '15%',
    width:'60%',
    height:'30px',
    border:'none',
    backgroundColor:'#448CE2',
    borderBottomWidth: 1,
    color:'white',},

submitButtonStyle:{
  position:"absolute",
  left:'75.6%',
  height:'35px',
  top:'21px',
  border:'none',
  backgroundColor:'#448CE2',
  color:'white',
  hright:'20%',
  width:"20%",
  borderColor: 'white',
  borderWidth: 1,
  borderStyle:'solid'},

smallSizeCloud:{
    position:'absolute',
    left:'65%',
    bottom:'530px',
},

bigSizeCloud:{
    position:'absolute',
    left:'10%',
    bottom:"380px",
},

rightSideStatus:{
    fontFamily: 'Open Sans, sans-serif',
    position:'absolute',
    left:'55%',
    bottom:"490px",
    color:'white',
},

weatherTemperature:{
    fontSize: "60px",
    fontFamily: 'Open Sans, sans-serif',
    position:'absolute',
    left:'30%',
    bottom:"450px",
    color:'white',
},

weatherStatuesColor:{
  color:'white'
},

footerStyle:{
  position:'relative',
  width:"50%",
  height:'150px',
  left:'20%',
  backgroundColor:'#FFFFFF',
  borderWidth: 1,
  borderRadius: '3%',
},

firstFooterSection:{
  fontFamily: 'Open Sans, sans-serif',
  position:'relative',
  width:'20%',
  height:'150px',
  backgroundColor:'#FFFFFF',
  textAlign:'center',
},

secondFooterSection:{
  fontFamily: 'Open Sans, sans-serif',
  position:'relative',
  bottom:'100%',
  left:"20%",
  width:'20%',
  height:'150px',
  backgroundColor:'#FFFFFF',
  textAlign:'center',
  borderLeftColor: 'grey',
  borderLeftWidth: 1,
  borderStyle: 'solid',
  borderBottomColor:'red',
  borderBottomWidth: 0,
  borderTopColor:'red',
  borderTopWidth: 0,
},

thirdFooterSection:{
  fontFamily: 'Open Sans, sans-serif',
  position:'absolute',
  bottom:'0%',
  left:"40%",
  width:'20%',
  height:'150px',
  backgroundColor:'#FFFFFF',
  textAlign:'center',
  borderLeftColor: 'grey',
  borderLeftWidth: 1,
  borderStyle: 'solid',
  borderBottomColor:'red',
  borderBottomWidth: 0,
  borderTopColor:'red',
  borderTopWidth: 0,
},

fourthFooterSection:{
  fontFamily: 'Open Sans, sans-serif',
  position:'absolute',
  bottom:'0%',
  left:"60%",
  width:'20%',
  height:'150px',
  backgroundColor:'#FFFFFF',
  textAlign:'center',
  borderLeftColor: 'grey',
  borderLeftWidth: 1,
  borderStyle: 'solid',
  borderBottomColor:'red',
  borderBottomWidth: 0,
  borderTopColor:'red',
  borderTopWidth: 0,
},

fivthFooterSection:{
  fontFamily: 'Open Sans, sans-serif',
  position:'absolute',
  bottom:'0%',
  left:"80%",
  width:'20%',
  height:'150px',
  backgroundColor:'#FFFFFF',
  textAlign:'center',
  borderLeftColor: 'grey',
  borderLeftWidth: 1,
  borderStyle: 'solid',
  borderBottomColor:'red',
  borderBottomWidth: 0,
  borderTopColor:'red',
  borderTopWidth: 0,
  borderRightColor:'red',
  borderRightWidth: 0,
}
}
