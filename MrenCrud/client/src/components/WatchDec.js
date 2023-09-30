import React, { useState } from 'react'

const WatchDec = () => {
  const [times, setTimes] = useState("")
  let zoon = "AM"
    const date = new Date();
    // const day = date.getDay() + 1;
    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();
    let second = date.getSeconds();
    let munit = date.getMinutes();
    let hours = date.getHours();
    // const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const MonthName =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if(second <= 9){
      second = "0" + second
    }
    if(munit <= 9){
      munit = "0"+ munit
    }
    if(hours > 12){
      zoon = "PM"
    }
    if(hours > 12){
      hours = hours - 12
    }
    if(hours <= 9 ){
      hours = "0" + hours
    }
    setTimeout(()=>{
      setTimes( hours + " : " + munit + ' : ' + second )
    }, 1000)
  return (
    <div>
      {times } <span className='zoon'><sup>{zoon}</sup></span>
    </div>
  )
}

export default WatchDec
