

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getcity = async(city) => {
try {
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result = await response.json();

    temp1.innerHTML = result.temp + '<span class="font-medium text-2xl relative -top-[23px] ">&#8451;</span>';
    cities.innerHTML ="Climate of " + city;
    feel.innerHTML = result.feels_like + '<span class="font-medium text-sm md:text-base relative -top-[7px] md:-top-[9px] ">&#8451;</span>';
    humidity.innerHTML = result.humidity;
    speed.innerHTML = result.wind_speed;
    pct.innerHTML = result.cloud_pct;
    max.innerHTML = result.max_temp + '<span class="font-medium text-sm md:text-base relative -top-[7px] md:-top-[9px] ">&#8451;</span>';
    min.innerHTML = result.min_temp + '<span class="font-medium text-sm md:text-base relative -top-[7px] md:-top-[9px] ">&#8451;</span>';

    if (result.cloud_pct < 31) {
        document.getElementById('theme').className = "bg-gradient-to-r from-sky-400 to-blue-500 h-[100vh] flex flex-col justify-evenly";
        type.innerHTML = "CLEAR";    
    }
    else{
        // document.getElementById('theme').className = "bg-gradient-to-r from-gray-700 via-gray-900 to-black h-[100vh]";
        document.getElementById('theme').className = "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 h-[100vh] flex flex-col justify-evenly";
        type.innerHTML = "CLOUDY";
    }

	console.log(result);
} catch (error) {
    
	console.error(error);
}

}

document.getElementById('submits').addEventListener("click",(e)=>{
        e.preventDefault
        getcity(search.value);
})


getcity("delhi")

// {"cloud_pct": 0, "temp": 19, "feels_like": 19, "humidity": 70, "min_temp": 16, "max_temp": 22, "wind_speed": 2.57, "wind_degrees": 30, "sunrise": 1690893995, "sunset": 1690947876}