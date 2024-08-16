import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState, useCallback } from "react"
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태가 있다.
// 3. 5개의 버튼이 있다. (1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재 위치 기반으로 돌아온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.
function App() {
  
  const [weather, setWeather] = useState(null)
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }, []);

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05735e26c734deeb41bc42e8f7bbfe79&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  useEffect(()=>{
    getCurrentLocation()
  }, [getCurrentLocation])  // componentDidMount()

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton/>
      </div>
    </div>
  );
}

export default App;
