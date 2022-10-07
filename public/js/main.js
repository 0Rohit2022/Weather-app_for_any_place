const submitBtnEl = document.getElementById("submitBtn")
const citynameEl = document.getElementById("cityname")
const city_nameEl = document.getElementById("city_name");
const tempEl = document.getElementById("temp");
const temp_statusEl = document.getElementById("temp-status")
const middlelayerEl = document.querySelector(".middle_layer")
const TodayDataEl = document.getElementById("today_data");
const DayEl = document.getElementById("day");
const weeknames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
DayEl.textContent = weeknames[new Date().getDay()]
const monthNames = ["januar", "Feburary", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
TodayDataEl.textContent = new Date().getDate() + " " + monthNames[new Date().getMonth()].substring(0,3);


const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = citynameEl.value;
    if (cityVal === "") {
        city_nameEl.innerHTML = `Please write the city name before search`;
        middlelayerEl.classList.add("data_hide")

    } else {
       
        try {
            
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=301b651c2de00b029b2af83b04bc0573`
            const response = await fetch(url);
            const orgData = await response.json();
            const arr = [orgData];
            middlelayerEl.classList.remove("data_hide")

            city_nameEl.innerText = `${arr[0].name}, ${arr[0].sys.country}`

            tempEl.innerText = arr[0].main.temp;

            const tempStatus = arr[0].weather[0].main;

            if (tempStatus == "Clear") {
                temp_statusEl.innerHTML = "<i class ='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if (tempStatus == "Clouds") {
                temp_statusEl.innerHTML = "<i class ='fas fa-cloud' style='color: #dfe4ea;'></i>";
            }
    
            else if (tempStatus == "Rain") {
                temp_statusEl.innerHTML = "<i class ='fas fa-cloud-rain' style='color:#d6d5c5;'></i>";
            }
            else {
                temp_statusEl.innerHTML = "<i class ='fas fa-sun' style='color:#eccc68;'></i>";
            }

          
        }
        catch {
            city_nameEl.innerHTML = `Please enter the city name Properly`
            middlelayerEl.classList.add("data_hide");

        }

       

    }




}


submitBtnEl.addEventListener("click", getinfo);