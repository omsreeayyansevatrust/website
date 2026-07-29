"use client";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
);

export default function ActivityChart(){

const data={

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
],

datasets:[

{

label:"Activities",

data:[
12,
19,
10,
25,
16,
30,
22,
18,
24,
20,
28,
35
],

borderColor:"#ea580c",

backgroundColor:"rgba(234,88,12,.2)",

tension:.4

}

]

};

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-bold text-lg mb-5">
Monthly Activities
</h2>

<Line data={data}/>

</div>

)

}