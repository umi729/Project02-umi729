import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormaterService {

  constructor() { }

  formatDate (date : string) : String {

    console.log("Formatting Date : " + date);

    if (date[4] == '-') { return date; }

    let MM : string = "";
    let DD : string = "";
    let YYYY : string = "";

    let wordMonth : string = "";
    let spaces : number = 0;

    let activechar : string = "";

    let result : String = "";

    for (let i : number = 0; i < date.length; ++ i) {

      activechar = date[i];

      //console.log("Active : " + activechar);

      if (activechar === " ") {

        ++ spaces;
        continue;

      }

      if (spaces === 0) {

        DD += date[i];

        //console.log("DD : " + DD);

      }
      else if (spaces === 1) {

        //console.log("FOrmatting Month");

        let two : number = 2;

        wordMonth += date[i];

        while (two > 0) {

          ++ i;
          wordMonth += date[i];

          -- two;

        }

        //console.log(wordMonth);

        switch (wordMonth) {
          case "Jan" :
            MM = "01";
            break;
          case "Feb" :
            MM = "02";
            break;
          case "Mar" :
            MM = "03";
            break;
          case "Apr" :
            MM = "04";
            break;
          case "May" :
            MM = "05";
            break;
          case "Jun" :
            MM = "06";
            break;
          case "Jul" :
            MM = "07";
            break;
          case "Aug" :
            MM = "08";
            break;
          case "Sep" :
            MM = "09";
            break;
          case "Oct" :
            MM = "10";
            break;
          case "Nov" :
            MM = "11";
            break;
          case "Dec" :
            MM = "12";
            break;
          default :
            console.log("Error : Default Case");
            break;

        }

        //console.log("MM : " + MM);

      } // << End Month Format
      else {

        YYYY += date[i];

        //console.log("YYYY : " + YYYY);

      }

    } // << End Formatting For Loop

    console.log("MM : " + MM);
    console.log("DD : " + DD);
    console.log("YYYY : " + YYYY);

    result = YYYY + "-" + MM + "-" + DD;

    console.log("Formatted Date : " + result);

    return result;


  } // << End fomatDate Method

}
