# phase.one
Dunwoody CWEB1111.01 Spring 2019 | Team Project Phase 1

# Contents
* [Reference](https://github.com/raphkris/phase.one#reference)
* [Requirements](https://github.com/raphkris/phase.one#requirements)
* [Things to complete](https://github.com/raphkris/phase.one#things-to-complete)
    * [Universal](https://github.com/raphkris/phase.one#universal)
    * [index.html](https://github.com/raphkris/phase.one#index.html)
    * [use.html](https://github.com/raphkris/phase.one#use.html)
    * [examples.html](https://github.com/raphkris/phase.one#examples.html)
    * [demo.html](https://github.com/raphkris/phase.one#demo.html)
    * [index.js](https://github.com/raphkris/phase.one#index.js)
    * [data.json shortcuts legend](https://github.com/raphkris/phase.one#datajson-shortcuts-legend)

# Reference
- [phase.one](https://raphkris.github.io/phase.one/) link (attached to master branch)
- [Chart.js](https://www.chartjs.org/docs/latest/) link and tutorial. front end framework for charts.
- [skeleton](http://getskeleton.com/) link and guide. front end framework.
- Dataset from [Kaggle](https://www.kaggle.com/CooperUnion/cardataset).

# Requirements
## UI/UX
- [x] Display data graphically (three different manipulations)
- [ ] Welcome end-user (who the data is for/when the data was extracted/where data came from/why data is important)
- [ ] End-user manipulate one chart
- [x] Select font
- [ ] Select color
- [ ] Select graphics

## Data/programming logic
- [x] Determine topic
- [x] Determine dataset
- [x] 501 (500?) records minimum
- [x] Five key-value attributes minimum per record
- [x] (Try to) include programming concepts (ch. 3-9)
- [ ] (Implement sorting algorithm *phase.two*)

## Hosting/presentation
- [ ] Presentation (45 minutes)
- [ ] Review selection process (topic/data/tools/framework/algorithms)
- [ ] Explain (mission/objectives)
- [ ] Include (sorting algorithm *phase.two*/front-end JavaScript framework)

# Things to complete
## Universal
### Nav bar
The nav bar will be used in all five (index, use, examples, demo, about) html pages, immediately following the opening `<body>` tag.
A possible solution:
```html
<body class="FILENAME">    <!-- Where FILENAME is the name of the current file excluding the filetype.
                                This is for CSS use and is irrelevant to the nav bar -->

<nav class="u-full-width"> <!-- Skeleton framework. Sets width to 100%. -->
    <!--
        logo container
    -->
    <div class="u-pull-left"> <!-- Skeleton framework. Floats div containing logo to the left. -->
        <p class="logo logo-superscript">
	    <a href="index.html logo logo-main">AutoStat</a>beta
	    </p>
    </div>
    <!--
        nav bar links
    -->
    <div class="u-pull-right"> <!-- Skeleton framework. Floats div containing links to the right. -->
        <p><a href="use.html">Use</a></p>
        <p><a href="examples.html">Examples</a></p>
        <p><a href="demo.html">Demo</a></p>
        <p><a href="about.html">About</a></p>
        <button>Demo</button>
    </div>
</nav>

	<!-- Other body elements... -->
</body>
```
### Footer
> nothing yet...

## index.html
### Welcome end user
Concise greeting to end user. No explanation on this page because that'll be given in `use.html`.
### "Hero image"
Find background for page that is relevant and attracts end user and doesn't distract from the greeting.
### Call to action button
"Learn more" leads end user directly to `use.html`.

## use.html
### Explanation
Give user the explanation of who the data is for, what the data are, when they were created, where they came from, and why the data are important.

## examples.html
### Charts
Min two different kinds of charts (not manipulated by end user). JavaScript code for charts are in `index.js`, named `myChart#()` where # = numerical order of chart on page.

## demo.html
### Chart manipulation
One chart that the end user can manipulate. Page loads with an example. Chart is `demoChart()` in its' own file, `demo.js`.

## index.js
All charts from `examples.html` are coded here. End-user manipulated chart isn't included in this file, it has its' own (`demo.html`).

# data.json shortcuts legend
## Make
Short   | Original      | Country |---| Short     | Original      | Country
:---:   | :---:         | :---:   |---| :---:     | :---:         | :---:
**Make**| **Make**      |         |---| **Make**  | **Make**      |
ACU     | Acura         | JPN     |---| LEX       | Lexus         | JPN
ALFA    | Alfa Romeo    | ITL     |---| LIN       | Lincoln       | US
AM      | Aston Martin  | UK      |---| LOT       | Lotus         | UK
AUDI    | Audi          | DE      |---| MAS       | Maserati      | ITL
BEN     | Bentley       | UK      |---| MAY       | Maybach       | DE
BMW     | BMW           | DE      |---| MAZ       | Mazda         | JPN
BUG     | Bugatti       | FR      |---| MCLA      | Mclaren       | UK
BUI     | Buick         | US      |---| MB        | Mercedes-Benz | DE
CAD     | Cadillac      | US      |---| MITS      | Mitsubishi    | JPN
CHEV    | Chevrolet     | US      |---| NIS       | Nissan        | JPN
CHR     | Chrysler      | US      |---| OLDS      | Oldsmobile    | US
DOD     | Dodge         | US      |---| PLY       | Plymouth      | US
FERR    | Ferrari       | ITL     |---| PON       | Pontiac       | US
FIAT    | Fiat          | ITL     |---| POR       | Porsche       | DE
FORD    | Ford          | US      |---| RR        | Rolls-Royce   | UK
GEN     | Genesis       | KR      |---| SAA       | Saab          | SE
GMC     | GMC           | US      |---| SCI       | Scion         | JPN
HON     | Honda         | JPN     |---| SPY       | Spyker        | NL
HUM     | Hummer        | US      |---| SUB       | Subaru        | JPN
HYUN    | Hyundai       | KR      |---| SUZ       | Suzuki        | JPN
INF     | Infiniti      | JPN     |---| TSLA      | Tesla         | US
KIA     | Kia           | KR      |---| TOY       | Toyota        | JPN
LAM     | Lamborghini   | ITL     |---| VW        | Volkswagen    | DE
LR      | Land Rover    | UK      |---| VOL       | Volvo         | SE

## Make by Country
```
DE      | FR    | ITL   | JPN   | KR    | NL    | SE    | UK    | US
BMW     | 🇫🇷    | FERR  | HON   | HYUN  | 🇳🇱    | VOL   | BEN   | CAD
MAY     | 🇫🇷    | FIAT  | INF   | KIA   | 🇳🇱    | 🇸🇪    | LR    | CHEV
MB      | 🇫🇷    | LAM   | LEX   | 🇰🇷    | 🇳🇱    | 🇸🇪    | LOT   | CHR
POR     | 🇫🇷    | MAS   | MAZ   | 🇰🇷    | 🇳🇱    | 🇸🇪    | RR    | DOD
VW      | 🇫🇷    | 🇮🇹    | MITS  | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | GMC
🇩🇪      | 🇫🇷    | 🇮🇹    | NIS   | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | HUM
🇩🇪      | 🇫🇷    | 🇮🇹    | SCI   | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | LIN
🇩🇪      | 🇫🇷    | 🇮🇹    | SUB   | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | OLDS
🇩🇪      | 🇫🇷    | 🇮🇹    | SUZ   | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | PLY
🇩🇪      | 🇫🇷    | 🇮🇹    | TOY   | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | PON
🇩🇪      | 🇫🇷    | 🇮🇹    | 🇯🇵    | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | TSLA
🇩🇪      | 🇫🇷    | 🇮🇹    | 🇯🇵    | 🇰🇷    | 🇳🇱    | 🇸🇪    | 🇬🇧    | 🇺🇸
```

## Engine Fuel Type -> Fuel
Short   | Original
:---:   | :---:
**Fuel**| **Engine Fuel Type**
N       | N/A
D       | diesel
E       | electric
FPCE  | flex-fuel (premium unleaded recommended/E85)
FRE   | flex-fuel (unleaded/E85)
NAT     | natural gas
PC      | premium unleaded (recommended)
PQ      | premium unleaded (required)
R       | regular unleaded

## Driven_Wheels -> DT
Short   | Original
:---:   | :---:
**DT**  | **Driven_Wheels**
4       | four wheel drive
A       | all wheel drive
F       | front wheel drive
R       | rear wheel drive

## Transmission Type -> Trans
Short       | Original
:---:       | :---:
**Trans**   | **Transmission Type**
N           | UNKNOWN
M           | MANUAL
A           | AUTOMATIC
D           | DIRECT_DRIVE
AMT         | AUTOMATED_MANUAL

## Vehicle Size -> Size
Short   | Original
:---:   | :---:
**Size**| **Vehicle Size**
C       | Compact
M       | Midsize
L       | Large

## Vehicle Style -> Style
Short       | Original
:---:       | :---:
**Style**   | **Vehicle Style**
2H          | 2dr Hatchback
2S          | 2dr SUV
4H          | 4dr Hatchback
4S          | 4dr SUV
CMV         | Cargo Minivan
CV          | Cargo Van
CON         | Convertible
CONS        | Convertible SUV
COU         | Coupe
CCP         | Crew Cab Pickup
ECP         | Extended Cab Pickup
PMV         | Passenger Minivan
PV          | Passenger Van
RCP         | Regular Cab Pickup
S           | Sedan
W           | Wagon

## Market Category -> MCAT

*changes not yet made in data.json.*

Short   | Original
:---:   | :---:
**MCAT**| **Market Category**
C       | Crossover
D       | Diesel
E       | Exotic
F       | Flex Fuel
H       | Hatchback
HP      | High-Performance
HY      | Hybrid
L       | Luxury
N       | N/A
P       | Performance
T       | Factory Tuner