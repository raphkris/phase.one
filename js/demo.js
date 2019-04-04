/*
    Notes

    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

function demoChart() {
    
    
    /** Make the connection to external server **/
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        
        if(this.readyState == 4 && this.status == 200){
            
            // Typical action to be performed when the document is ready:
            var data = JSON.parse(this.responseText);
            
            console.log(data[0].Year)
            
            // xx, xx, xx, xx
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