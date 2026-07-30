"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Trustee } from "@/types/trustee";
import { createTrustee, updateTrustee } from "@/services/trusteeService";
import PhotoUploader from "./PhotoUploader";

interface Props {
  mode: "add" | "edit";
  trustee?: Trustee;
}

const initialState: Trustee = {
  fullName: "",
  designation: "",
  photo: "",
  mobile: "",
  email: "",
  address: "",
  occupation: "",
  qualification: "",
  joiningDate: "",
  tenureFrom: "",
  tenureTo: "",
  responsibilities: "",
  biography: "",
  message: "",
  displayOrder: 1,
  featured: false,
  status: "Active",
};

export default function TrusteeForm({ mode, trustee }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Trustee>(initialState);

  useEffect(() => {
    if (mode === "edit" && trustee) setForm({ ...initialState, ...trustee });
  }, [mode, trustee]);

  function updateField<K extends keyof Trustee>(key: K, value: Trustee[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    if (!form.fullName.trim()) return alert("Trustee name is required.");
    if (!form.designation.trim()) return alert("Designation is required.");

    setLoading(true);
    try {
      const { id, createdAt, updatedAt, ...payload } = form as any;

      if (mode === "add") {
        await createTrustee(payload);
      } else if (trustee?.id) {
        await updateTrustee(trustee.id, payload);
      }

      router.push("/admin/trustees");
    } catch (e) {
      console.error(e);
      alert("Unable to save trustee.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <PhotoUploader
            value={form.photo}
            onChange={(url) => updateField("photo", url)}
          />
        </div>

        <div className="lg:col-span-2 space-y-6">

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Full Name *</label>
              <input className="w-full border rounded-lg p-3"
                value={form.fullName}
                onChange={(e)=>updateField("fullName",e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Designation *</label>
              <input className="w-full border rounded-lg p-3"
                value={form.designation}
                onChange={(e)=>updateField("designation",e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input className="border rounded-lg p-3" placeholder="Mobile"
              value={form.mobile}
              onChange={(e)=>updateField("mobile",e.target.value)}
            />
            <input className="border rounded-lg p-3" placeholder="Email"
              value={form.email}
              onChange={(e)=>updateField("email",e.target.value)}
            />
          </div>

          <textarea className="w-full border rounded-lg p-3" rows={3}
            placeholder="Address"
            value={form.address}
            onChange={(e)=>updateField("address",e.target.value)}
          />

          <div className="grid md:grid-cols-2 gap-5">
            <input className="border rounded-lg p-3" placeholder="Qualification"
              value={form.qualification}
              onChange={(e)=>updateField("qualification",e.target.value)}
            />
            <input className="border rounded-lg p-3" placeholder="Occupation"
              value={form.occupation}
              onChange={(e)=>updateField("occupation",e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <input type="date" className="border rounded-lg p-3"
              value={form.joiningDate}
              onChange={(e)=>updateField("joiningDate",e.target.value)}
            />
            <input type="date" className="border rounded-lg p-3"
              value={form.tenureFrom}
              onChange={(e)=>updateField("tenureFrom",e.target.value)}
            />
            <input type="date" className="border rounded-lg p-3"
              value={form.tenureTo}
              onChange={(e)=>updateField("tenureTo",e.target.value)}
            />
          </div>

          <textarea className="w-full border rounded-lg p-3" rows={4}
            placeholder="Responsibilities"
            value={form.responsibilities}
            onChange={(e)=>updateField("responsibilities",e.target.value)}
          />

          <textarea className="w-full border rounded-lg p-3" rows={5}
            placeholder="Biography"
            value={form.biography}
            onChange={(e)=>updateField("biography",e.target.value)}
          />

          <textarea className="w-full border rounded-lg p-3" rows={5}
            placeholder="Trustee Message"
            value={form.message}
            onChange={(e)=>updateField("message",e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-5">
            <input type="number" className="border rounded-lg p-3"
              value={form.displayOrder}
              onChange={(e)=>updateField("displayOrder",Number(e.target.value))}
            />

            <select className="border rounded-lg p-3"
              value={form.status}
              onChange={(e)=>updateField("status",e.target.value as "Active"|"Inactive")}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e)=>updateField("featured",e.target.checked)}
              />
              Featured Trustee
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              onClick={()=>router.push("/admin/trustees")}
              className="px-6 py-3 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={save}
              className="px-6 py-3 rounded-lg bg-orange-600 text-white"
            >
              {loading ? "Saving..." : mode==="add" ? "Create Trustee" : "Update Trustee"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}