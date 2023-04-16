// function getCelcius(farenheit) {
//   return farenheit.map(value => (value -32) * 5/9)
// }


function solution(D) {
  const weekdaysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const outputDict = {};

  // new Date object is made for each key in the input dictionary to get the day of the week it is in
  for (const key in D) {
    const date = new Date(key);
    const weekDay = weekdaysArr[date.getUTCDay()];

    // If the day of the week is not already in the outputDict dictionary, add it
    if (!outputDict.hasOwnProperty(weekDay)) {
      outputDict[weekDay] = 0;
    }

    // Add the value of the current key to the sum of values for the day of the week
    outputDict[weekDay] += D[key];
  }

  console.log(outputDict)

  for(let i= 0; i<weekdaysArr.length; i++){

    let currentDay = weekdaysArr[i];

    if(!outputDict.hasOwnProperty(currentDay)){
      // console.log("I dont have ", currentDay)
        let prevDay = weekdaysArr[(i + 6) % 7]; // Wrap around to Sunday for the previous day
        let nextDay = weekdaysArr[(i + 1) % 7]; // Wrap around to Monday for the next day

        while(!outputDict.hasOwnProperty(prevDay)){
          prevDay = weekdaysArr[(i - 1 + 6 ) % 7]
        }

        while(!outputDict.hasOwnProperty(nextDay)){
           nextDay = weekdaysArr[(i + 1 + 1) % 7];
        }

        // console.log(`Prev day for ${currentDay} is ${prevDay}`)
        // console.log(`Next day for ${currentDay} is ${nextDay}`)

        outputDict[currentDay] = Math.floor((outputDict[prevDay] + outputDict[nextDay]) / 2);

    }
  }

  return outputDict;
}





console.log(solution({"2020-01-01": 4, "2020-01-02":4, "2020-01-03":6, "2020-01-04":8, "2020-01-05":2 , "2020-01-06":-6, "2020-01-07": 2, "2020-01-08": -2}))
// console.log(solution({'2020-01-01':6, '2020-01-04':12, '2020-01-05':14, '2020-01-06':2, '2020-01-07': 4}))

