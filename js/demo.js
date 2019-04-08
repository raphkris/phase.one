/*
Notes
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Each step (section) shows what should change within the anatomy of the function based on
user's selection.

Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
- Anatomy of function
- Line 6 / variables declared
- Step 1
- Step 2
- Step 3
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
1       function demoChart() {
2           var xhttp = new XMLHttpRequest();
3           xhttp.onreadystatechange = function() {
4               if(this.readyState == 4 && this.status == 200){
5                   var data = JSON.parse(this.responseText);
6                   var xx = 0;                                         All variables already declared.
7                   for(var i = 0; i < data.length; i++){
8                       if(data[i].xx == 4){                            Step 3 changes lines 8 - 10
9                           xx += 1;                                    depending on the boxes ticked
10                      }                                               by end-user.
11                  }
12                  console.log(xx);                                    Step 3 changes this line (not priority).
13                  var ctx = document.getElementById("demoChart");
14                  var myChart = new Chart(ctx, {
15                  type: 'bar',                                        Step 1 changes this line.
16                  data: {
17                      labels: ['xx', 'xx', 'xx', 'xx'],               Step 2 changes this line.
18                      datasets: [{
19                          label: 'Drivetrain',                        Step 2 changes this line.
20                          data: [xx, xx, xx, xx],                     Step 3 changes this line.
21                          borderWidth: 1
22                     }]
23                  },
24                  options: {
25                      scales: {
26                          yAxes: [{
27                              ticks: {
28                                  beginAtZero: true
29                              }
30                          }]
31                      }
32                  }
33              });
34          
35              }//else{
36              //alert("Sorry, we didn't find the file requested");}
37              };
38          xhttp.open("GET", "js/data.json", true);
39          xhttp.send();    
40      }
*/

/*
Line 6 / variables declared
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0;

ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0;

NINETIES = 0; TTNDS = 0; TTNDTENS = 0;

D = 0; E = 0; FPCE = 0; FRE = 0; PC = 0; PQ = 0; R = 0; 

ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0;

WD = 0; AWD = 0; FWD = 0; RWD = 0;

AUTO = 0; MAN = 0;

Compressed:
var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FPCE = 0; FRE = 0; PC = 0; PQ = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
*/

/*
Step 1
User select type of chart.
Changes only line 15 in demoChart().
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Line chart:
    type: 'line',

Bar chart:
    type: 'bar',

Radar chart:
    type: 'radar',

Donut chart:
    type: 'donut',

Pie chart:
    type: 'pie',

Polar chart:
    type: 'polarArea',
*/


/*
Step 2
User select x-axis.
Changes lines 17 and 18 in demoChart().
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Country:
    labels: ['Germany', 'France', 'Italy', 'Japan', 'South Korea', 'Netherlands', 'Sweden', 'United Kingdom', 'United States',],
    datasets: [{
        label: 'Country',

Make:
    labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
    datasets: [{
        label: 'Make',

Year:
    labels: ['',],
    datasets: [{
        label: 'Year',

Fuel Type:
    labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
    datasets: [{
        label: 'Fuel Type',

Horsepower:
    labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
    datasets: [{
        label: 'Horsepower',

Drivetrain:
    labels: ['4WD', 'AWD', 'FWD', 'RWD',],
    datasets: [{
        label: 'Drivetrain',

Transmission:
    labels: ['Automatic', 'Manual'],
    datasets: [{
        label: 'Transmission',
*/


/*
Step 3
User filter data.
Changes lines 8 - 10, 20.
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
If x-axis is Country:

    data: [DE, FR, ITL, JPN, KR, NL, SE, UK, US],
If x-axis is Make:


If x-axis is Year:


If x-axis is Fuel Type:


If x-axis is Horsepower:


If x-axis is Drivetrain:


If x-axis is Transmission:

*/
