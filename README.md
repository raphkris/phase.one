# phase.one
Dunwoody CWEB1111.01 Spring 2019 | Team Project Phase 1

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

## data.json shortcuts legend
### Make
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

#### Make by Country
BMW     | ðŸ‡«ðŸ‡·    | FERR  | HON   | HYUN  | ðŸ‡³ðŸ‡±    | VOL   | BEN   | CAD
MAY     | ðŸ‡«ðŸ‡·    | FIAT  | INF   | KIA   | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | LR    | CHEV
MB      | ðŸ‡«ðŸ‡·    | LAM   | LEX   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | LOT   | CHR
POR     | ðŸ‡«ðŸ‡·    | MAS   | MAZ   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | RR    | DOD
VW      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | MITS  | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | GMC
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | NIS   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | HUM
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | SCI   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | LIN
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | SUB   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | OLDS
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | SUZ   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | PLY
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | TOY   | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | PON
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | ðŸ‡¯ðŸ‡µ    | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | TSLA
ðŸ‡©ðŸ‡ª      | ðŸ‡«ðŸ‡·    | ðŸ‡®ðŸ‡¹    | ðŸ‡¯ðŸ‡µ    | ðŸ‡°ðŸ‡·    | ðŸ‡³ðŸ‡±    | ðŸ‡¸ðŸ‡ª    | ðŸ‡¬ðŸ‡§    | ðŸ‡ºðŸ‡

### Engine Fuel Type -> Fuel
Short   | Original
:---:   | :---:
**Fuel**| **Engine Fuel Type**
N       | N/A
D       | diesel
E       | electric
FPCE85  | flex-fuel (premium unleaded recommended/E85)
FRE85   | flex-fuel (unleaded/E85)
NAT     | natural gas
PC      | premium unleaded (recommended)
PQ      | premium unleaded (required)
R       | regular unleaded

### Driven_Wheels -> DT
Short   | Original
:---:   | :---:
**DT**  | **Driven_Wheels**
4       | four wheel drive
A       | all wheel drive
F       | front wheel drive
R       | rear wheel drive

### Transmission Type -> Trans
Short       | Original
:---:       | :---:
**Trans**   | **Transmission Type**
N           | UNKNOWN
M           | MANUAL
A           | AUTOMATIC
D           | DIRECT_DRIVE
AMT         | AUTOMATED_MANUAL

### Vehicle Size -> Size
Short   | Original
:---:   | :---:
**Size**| **Vehicle Size**
C       | Compact
M       | Midsize
L       | Large

### Vehicle Style -> Style
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

### Market Category -> MCAT

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