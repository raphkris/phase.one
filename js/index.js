function myChart1() {

  /** Make the connection to external server **/
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var data = JSON.parse(this.responseText);

      console.log(data[0].Year)
      
      var yearTwentyEleven = 0;
      for(var i = 0; i < data.length; i++){
        if(data[i].Year == 2011){
            yearTwentyEleven += 1;
        }
      }
        
      console.log(yearTwentyEleven);

      var ctx = document.getElementById("myChart1");
      var myChart = new Chart(ctx, { type: 'line',
                                    data: {  labels: ["Count of year 2011", "Two", "Three"],
                                    datasets: [{  label: 'Test label', // tooltip on data point hover
                                                            data: [yearTwentyEleven, 19, 3, 5, 2, 3], // x axis data separated by commas, y axis data by numbers
                                                            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                                                              'rgba(54, 162, 235, 0.2)',
                                                                              'rgba(255, 206, 86, 0.2)',
                                                                              'rgba(75, 192, 192, 0.2)',
                                                                              'rgba(153, 102, 255, 0.2)',
                                                                              'rgba(255, 159, 64, 0.2)'],
                                                            borderColor: ['rgba(255,99,132,1)',
                                                                          'rgba(54, 162, 235, 1)',
                                                                          'rgba(255, 206, 86, 1)',
                                                                          'rgba(75, 192, 192, 1)',
                                                                          'rgba(153, 102, 255, 1)',
                                                                          'rgba(255, 159, 64, 1)'],
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

function myChart2() {

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