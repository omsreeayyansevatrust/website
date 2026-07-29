"use client";

import {
    FolderKanban,
    CalendarDays,
    Image,
    Users,
    HeartHandshake,
    IndianRupee
} from "lucide-react";

import StatCard from "../ui/StatCard";

interface Props{
    projects:number;
    events:number;
    gallery:number;
    volunteers:number;
    donations:number;
    amount:number;
}

export default function DashboardStats({
projects,
events,
gallery,
volunteers,
donations,
amount
}:Props){

return(

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<StatCard
title="Projects"
value={projects}
icon={FolderKanban}
bg="bg-blue-100"
color="text-blue-700"
/>

<StatCard
title="Events"
value={events}
icon={CalendarDays}
bg="bg-green-100"
color="text-green-700"
/>

<StatCard
title="Gallery"
value={gallery}
icon={Image}
bg="bg-purple-100"
color="text-purple-700"
/>

<StatCard
title="Volunteers"
value={volunteers}
icon={Users}
bg="bg-yellow-100"
color="text-yellow-700"
/>

<StatCard
title="Donations"
value={donations}
icon={HeartHandshake}
bg="bg-pink-100"
color="text-pink-700"
/>

<StatCard
title="Amount Raised"
value={`₹${amount.toLocaleString()}`}
icon={IndianRupee}
bg="bg-orange-100"
color="text-orange-700"
/>

</div>

)

}