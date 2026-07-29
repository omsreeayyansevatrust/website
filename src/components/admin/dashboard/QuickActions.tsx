"use client";

import Link from "next/link";

const actions=[

{
title:"Add Project",
link:"/admin/projects/add"
},

{
title:"Add Event",
link:"/admin/events/add"
},

{
title:"Gallery",
link:"/admin/gallery/add"
},

{
title:"Volunteer",
link:"/admin/volunteers/add"
}

];

export default function QuickActions(){

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-bold text-lg mb-6">

Quick Actions

</h2>

<div className="grid gap-4">

{actions.map(action=>(

<Link

key={action.title}

href={action.link}

className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg p-4"

>

{action.title}

</Link>

))}

</div>

</div>

)

}