<template>
    <div id="search-bar">
        <div id="search-input">
            <input type="text" v-model="query" v-on:keyup.enter="searching" placeholder="City name.....">
        </div>
        <div id="Show-data" v-if="infos != ''">
            <h1>{{infos.name}}</h1>
            <h3><i class="fas fa-thermometer-half"></i> {{temp}} <sup>°C</sup></h3>
            <h3><i class="fas fa-wind"></i> {{infos.wind.speed}} km/h</h3>
            <div id="images">
                <img v-bind:src="`http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`" v-bind:alt="infos.weather[0].description">
                <h3>{{infos.weather[0].main}}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
    i{
        margin-right: 10px;
    }
    #search-input input{
        font-family: "Sofia";
        border-color: rgba(0,0,0,0);
        background-color: rgba(255, 255, 255, 0.8);
        width: 300px;
        padding: 10px 30px;
        border-radius: 40px;
        font-size: 30px;
    }
    #Show-data{
        text-align: center;
        width: inherit;
        margin-top: 3px;
        background-color: rgba(211, 211, 211, 0.8);
        color: black;
        padding: 5px 0;
        padding-bottom: 15px;
        border-radius: 10px;
    }

    #Show-data h1{
        font-size: 50px;
    }

    #Show-data h3{
        font-size: 25px;
    }

    #images img{
        width: 200px;
        margin-bottom: 0;
    }
    #images h3{
        margin-top: 0;
    }
</style>

<script>
import { fetchWeather } from '../api/fetchWeather';

    export default {
        name: 'Search',
        data: function(){
            return{
                query: '',
                infos: '',
                temp: '',
            }
        },
        methods:{
            searching: function(){
                let self = this ;
                fetchWeather(this.query).then(
                    data =>{
                        self.infos = data;
                        self.temp = Math.round(parseFloat(self.infos.main.temp) - 273.15 , 1) 
                        console.log(self.infos)
                    }
                ).catch(err => {
                    // put here some code for err message on component for web service failure
                    if (err == 'Error: Request failed with status code 404'){
                        alert("សូមបញ្ចូលឈ្មោះទីក្រុងឬខេត្តដែលត្រឹមត្រូវ")
                    }
                })

                this.query = ''
            }
        }
    }
</script>margin-top: 3px;