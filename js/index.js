/*
    Comment syntax

    type of graph | specific data used
    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

/*
    bar | make - country of origin
    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/
function myChart1(){

  /** Make the connection to external server **/
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200){

      // Typical action to be performed when the document is ready:
      var data = JSON.parse(this.responseText);

      // Germany, France, Italy, Japan, South Korea, Netherlands, Sweden, United Kingdom, United States
      var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].Make == AUDI || data[i].Make == BMW || data[i].Make == MAY || data[i].Make == MB || data[i].Make == POR || data[i].Make == VW){
          DE += 1;
        }
        else if(data[i].Make == BUG){
          FR += 1;
        }
        else if(data[i].Make == ALFA || data[i].Make == FERR || data[i].Make == FIAT || data[i].Make == LAM || data[i].Make == MAS){
          ITL += 1;
        }
        else if(data[i].Make == ACU || data[i].Make == HON || data[i].Make == INF || data[i].Make == LEX || data[i].Make == MAZ || data[i].Make == MITS || data[i].Make == NIS || data[i].Make == SCI || data[i].Make == SUB || data[i].Make == SUZ || data[i].Make == TOY){
          JPN += 1;
        }
        else if(data[i].Make == GEN || data[i].Make == HYUN || data[i].Make == KIA){
          KR += 1;
        }
        else if(data[i].Make == SPY){
          NL += 1;
        }
        else if(data[i].Make == SAA || data[i].Make == VOL){
          SE += 1;
        }
        else if(data[i].Make == AM || data[i].Make == BEN || data[i].Make == LR || data[i].Make == LOT || data[i].Make == RR){
          UK += 1;
        }
        else if(data[i].Make == BUI || data[i].Make == CAD || data[i].Make == CHEV || data[i].Make == CHR || data[i].Make == DOD || data[i].Make == GMC || data[i].Make == HUM || data[i].Make == LIN || data[i].Make == OLDS || data[i].Make == PLY || data[i].Make == PON || data[i].Make == TSLA){
          US += 1;
        }
      }
      console.log(DE);
      console.log(FR);
      console.log(ITL);
      console.log(JPN);
      console.log(KR);
      console.log(SE);
      console.log(NL);
      console.log(UK);
      console.log(US);
      
      var ctx = document.getElementById("myChart1");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Germany', 'France', 'Italy', 'Japan', 'South Korea', 'Netherlands', 'Sweden', 'United Kingdom', 'United States'],
            datasets: [{
                label: '# of Votes',
                data: [DE, FR, ITL, JPN, KR, NL, SE, UK, US],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });

    }else{
      alert("Sorry, we didn't find the file requested");
    }
    };
  xhttp.open("GET", "js/data.json", true);
  xhttp.send();

}

/*
    bar | drivetrain
    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/
function myChart2(){

  /** Make the connection to external server **/
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200){

      // Typical action to be performed when the document is ready:
      var data = JSON.parse(this.responseText);

      console.log(data[0].Year)

      // 4WD
      var 4WD = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].DT == 4){
            4WD += 1;
        }
      }
      console.log(4WD);

      // AWD
      var AWD = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].DT == A){
            AWD += 1;
        }
      }
      console.log(AWD);

      // FWD
      var FWD = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].DT == F){
          FWD += 1;
        }
      }
      console.log(FWD);

      // RWD
      var RWD = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].DT == R){
          RWD += 1;
        }
      }
      console.log(RWD);

      var ctx = document.getElementById("myChart2");
      var myChart = new Chart(ctx, { type: 'line',
                                    data: {  labels: ["4WD", "AWD", "FWD", "RWD"],
                                    datasets: [{  label: 'Test label', // tooltip on data point hover
                                                            data: [4WD, AWD, FWD, RWD], // x axis data separated by commas, y axis data by numbers
                                                            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                                                              'rgba(54, 162, 235, 0.2)',
                                                                              'rgba(255, 206, 86, 0.2)',
                                                                              'rgba(75, 192, 192, 0.2)'],
                                                            borderColor: ['rgba(255,99,132,1)',
                                                                          'rgba(54, 162, 235, 1)',
                                                                          'rgba(255, 206, 86, 1)',
                                                                          'rgba(75, 192, 192, 1)'],
                                                            borderWidth: 1                                  }]
                                                                                                            },
                                      options: { scales: { yAxes:  [{ ticks: { beginAtZero:true } }]
                                                                                                    }
                                                                                                    }
                                                                                                            });

    }else{
      alert("Sorry, we didn't find the file requested");
    }
    };
  xhttp.open("GET", "js/data.json", true);
  xhttp.send();

}

/*
    type | focus
    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/
function myChart3(){

}