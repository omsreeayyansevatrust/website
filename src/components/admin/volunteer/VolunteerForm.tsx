"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Volunteer } from "@/types/volunteer";
import { createVolunteer, updateVolunteer } from "@/services/volunteerService";

interface Props {
  mode: "add" | "edit";
  volunteer?: Volunteer;
}

const emptyVolunteer: Volunteer = {
  fullName:"",
  photo:"",
  gender:"Male",
  dob:"",
  mobile:"",
  email:"",
  address:"",
  bloodGroup:"",
  occupation:"",
  skills:"",
  department:"",
  joiningDate:"",
  emergencyContact:"",
  aadhaarNumber:"",
  status:"Active",
};

export default function VolunteerForm({mode, volunteer}:Props){
  const router=useRouter();
  const fileRef=useRef<HTMLInputElement>(null);
  const [form,setForm]=useState<Volunteer>(emptyVolunteer);
  const [saving,setSaving]=useState(false);

  useEffect(()=>{
    if(mode==="edit" && volunteer) setForm(volunteer);
  },[mode,volunteer]);

  const setValue=(k:keyof Volunteer,v:any)=>setForm(p=>({...p,[k]:v}));

  async function upload(file:File){
    const fd=new FormData();
    fd.append("file",file);
    fd.append("upload_preset","ngo-projects");
    const res=await fetch("https://api.cloudinary.com/v1_1/etejpids/image/upload",{method:"POST",body:fd});
    const json=await res.json();
    setValue("photo",json.secure_url);
  }

  async function submit(e:React.FormEvent){
    e.preventDefault();
    setSaving(true);
    try{
      const {id,createdAt,updatedAt,...payload}=form as any;
      if(mode==="add") await createVolunteer(payload);
      else if(volunteer?.id) await updateVolunteer(volunteer.id,payload);
      router.push("/admin/volunteers");
    }finally{
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow space-y-6">
      <div>
        <button type="button" onClick={()=>fileRef.current?.click()} className="bg-orange-600 text-white px-4 py-2 rounded">Upload Photo</button>
        <input hidden ref={fileRef} type="file" accept="image/*" onChange={e=>e.target.files?.[0]&&upload(e.target.files[0])}/>
        {form.photo && <div className="relative h-40 w-40 mt-4"><Image src={form.photo} alt="" fill unoptimized className="rounded-lg object-cover"/></div>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input className="border p-3 rounded" placeholder="Full Name" value={form.fullName} onChange={e=>setValue("fullName",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Mobile" value={form.mobile} onChange={e=>setValue("mobile",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Email" value={form.email} onChange={e=>setValue("email",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Address" value={form.address} onChange={e=>setValue("address",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Blood Group" value={form.bloodGroup} onChange={e=>setValue("bloodGroup",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Occupation" value={form.occupation} onChange={e=>setValue("occupation",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Skills" value={form.skills} onChange={e=>setValue("skills",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Department" value={form.department} onChange={e=>setValue("department",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Emergency Contact" value={form.emergencyContact} onChange={e=>setValue("emergencyContact",e.target.value)}/>
        <input className="border p-3 rounded" placeholder="Aadhaar Number" value={form.aadhaarNumber} onChange={e=>setValue("aadhaarNumber",e.target.value)}/>
        <input type="date" className="border p-3 rounded" value={form.dob} onChange={e=>setValue("dob",e.target.value)}/>
        <input type="date" className="border p-3 rounded" value={form.joiningDate} onChange={e=>setValue("joiningDate",e.target.value)}/>
        <select className="border p-3 rounded" value={form.gender} onChange={e=>setValue("gender",e.target.value)}>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <select className="border p-3 rounded" value={form.status} onChange={e=>setValue("status",e.target.value)}>
          <option>Active</option><option>Inactive</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={()=>router.push("/admin/volunteers")} className="border px-6 py-3 rounded">Cancel</button>
        <button className="bg-orange-600 text-white px-6 py-3 rounded">{saving?"Saving...":mode==="add"?"Create Volunteer":"Update Volunteer"}</button>
      </div>
    </form>
  );
}