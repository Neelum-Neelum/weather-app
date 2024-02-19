import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL =
    "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL 
    = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyJTIwaG90fGVufDB8fDB8fHww";
    const COLD_URL 
    = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL 
    = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const DUST_URL 
    = "https://images.unsplash.com/photo-1600442715589-c2282b5e844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div>
            <div className="InfoBox">
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature = {info.temp}&deg;C </div>
          <div>Humidity = {info.humidity} </div>
          <div>Min Temp = {info.tempMin} </div>
          <div>Max Temp = {info.tempMax} </div>
          <div>Feels Like = {info.feelsLike}&deg;C </div>
          <div>weather can be described as = {info.weather} </div>
        </Typography>
      </CardContent>
      
    </Card>
            </div>
        </div>
    )
}