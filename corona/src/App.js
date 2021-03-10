import React from 'react';
import {Cards,Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import coronaImage from './media/images/covid19.jpg';

class App extends React.Component{

    state={
        data:{},
        country:'',
    }
    async componentDidMount()
    {
        const fetchedData=await fetchData();
        this.setState({data:fetchedData});
    }
    handleCountryChange=async(country)=>{
        //fetch the data
        const fetchedData=await fetchData(country);
        //set the state
        this.setState({data:fetchedData
            ,
            country:country
        });

    }
    render(){

    const {data,country}=this.state;
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={coronaImage} alt="banner"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            
        </div>
    )
    }
}

export default App;