"use client";

import { useRef, useState } from "react";
import axios from "axios";
import { Upload, X } from "lucide-react";

interface Props {
  folder: string;
  value?: string;
  onUploadComplete: (url: string) => void;
}

export default function ImageUploader({
  folder,
  value,
  onUploadComplete,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState(value || "");
  const [uploading, setUploading] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
  const uploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("folder", folder);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      const imageUrl = response.data.secure_url;

      onUploadComplete(imageUrl);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }

    setUploading(false);
  }

  return (
    <div className="space-y-4">

      <label className="font-semibold">
        Cover Image
      </label>

      {preview ? (
        <div className="relative w-64">

          <img
            src={preview}
            alt="Preview"
            className="rounded-lg border shadow"
          />

          <button
            type="button"
            onClick={() => {
              setPreview("");
              onUploadComplete("");
            }}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
          >
            <X size={16} />
          </button>

        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed rounded-xl p-8 flex flex-col items-center hover:border-orange-500"
        >
          <Upload size={40} />

          <p className="mt-3">
            Click to Upload Image
          </p>
        </button>
      )}

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {uploading && (
        <div className="text-orange-600 font-semibold">
          Uploading...
        </div>
      )}

    </div>
  );
}