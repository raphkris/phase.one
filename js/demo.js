/*
    Notes

    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

function demoChart() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            var xx = 0;
            for(var i= 0; i < data.length; i++){
                if(data[i].xx == 4){
                    xx += 1;
                }
            }
            console.log(xx);
            var ctx = document.getElementById("demoChart");
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['xx', 'xx', 'xx', 'xx'],
                datasets: [{
                    label: 'Drivetrain',
                    data: [xx, xx, xx, xx],
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