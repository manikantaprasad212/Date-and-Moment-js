
import './App.css';
import moment from 'moment';
import 'moment/locale/ja';
function App() {
   moment.locale("ja");
  let monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let daysArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  let republicDay = new Date(1950,0,26,12,45,20,300);

  // console.log(republicDay.setFullYear(2050));
  
  console.log(republicDay.getFullYear());
  console.log(monthsArray[republicDay.getMonth()]);
  console.log(republicDay.getDate());
  console.log(daysArray[republicDay.getDay()]);
  console.log(republicDay.getHours());
  console.log(republicDay.getMinutes());
  console.log(republicDay.getSeconds());
  console.log(republicDay.getMilliseconds());
  console.log(republicDay.getTime());

  // let newOne = new Date(2000000000000000);
  // console.log(newOne);
  //  let anotherOne = new Date("25 Aug 2024");
  //  console.log(anotherOne)
// console.log(moment().format('YYYY [escaped] YYYY'));
  return (
    <div className="App">
      <h1>Date Methods</h1>
    <form>
      <div>
        <label>Staring Date :</label>
        <input type="date" onChange={(eo)=>{
          let startDate = new Date(eo.target.value);

          let timeDuration = 120*24*60*60*1000

          let endTime = startDate.getTime()+timeDuration

          let batchEndingDate= new Date(endTime);
          // console.log(startDate);
          // console.log(batchEndingDate);
         console.log( moment(startDate).format('MMMM Do YYYY, h:mm:ss a'));

          console.log(moment().add(120, 'days').calendar());
          
        }}></input>

        <button type='button' onClick={()=>{
          // console.log(Date.now());
          console.log( moment().format('MMMM Do YYYY, h:mm:ss a'));
        }}> Time nButton</button>
      </div>
    </form>
      
        
    </div>
  );
}

export default App;
