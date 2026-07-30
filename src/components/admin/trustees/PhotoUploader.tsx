"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

const CLOUD_NAME = "etejpids";
const UPLOAD_PRESET = "ngo-projects";

export default function PhotoUploader({
  value,
  onChange,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Upload failed");
      }

      onChange(data.secure_url);
    } catch (error) {
      console.error(error);
      alert("Unable to upload image.");
    } finally {
      setUploading(false);
    }
  }

  function onFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    upload(file);
  }

  return (
    <div className="space-y-4">

      <label className="block text-sm font-semibold">
        Trustee Photo
      </label>

      {value ? (
        <div className="relative w-44 h-44 rounded-xl overflow-hidden border">

          <Image
            src={value}
            alt="Trustee"
            fill
            unoptimized
            className="object-cover"
          />

        </div>
      ) : (
        <div className="w-44 h-44 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
          No Photo
        </div>
      )}

      <div className="flex gap-3">

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="px-4 py-2 rounded-lg border"
          >
            Remove
          </button>
        )}

      </div>

      <input
        ref={fileInputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

    </div>
  );
}