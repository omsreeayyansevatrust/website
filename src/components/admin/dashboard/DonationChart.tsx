"use client";

import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
ArcElement,
Tooltip,
Legend
);

export default function DonationChart(){

const data={

labels:[
"Education",
"Medical",
"Food",
"Temple",
"Others"
],

datasets:[{

data:[
40,
25,
15,
10,
10
],

backgroundColor:[
"#ea580c",
"#16a34a",
"#2563eb",
"#9333ea",
"#facc15"
]

}]

};

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-bold mb-5">

Donation Categories

</h2>

<Doughnut data={data}/>

</div>

)

}