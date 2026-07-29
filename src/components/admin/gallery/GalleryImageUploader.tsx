"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Props {
  value: string[];
  onChange: (images: string[]) => void;
}

export default function GalleryImageUploader({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function uploadImage(file: File) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "upload_preset",
      "ngo-projects"
    );

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/etejpids/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    return data.secure_url;
  }

  async function handleFiles(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files) return;

    setUploading(true);

    try {
      const uploaded: string[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadImage(file);
        uploaded.push(url);
      }

      onChange([...value, ...uploaded]);
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  function removeImage(index: number) {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  }

  return (
    <div className="space-y-6">

      <div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg"
        >
          {uploading
            ? "Uploading..."
            : "Upload Images"}
        </button>

        <input
          ref={inputRef}
          hidden
          multiple
          type="file"
          accept="image/*"
          onChange={handleFiles}
        />

      </div>

      {value.length > 0 && (

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {value.map((image, index) => (

            <div
              key={index}
              className="relative"
            >
              <Image
                src={image}
                alt=""
                width={250}
                height={180}
                className="rounded-lg object-cover h-40 w-full"
                unoptimized
              />

              <button
                type="button"
                onClick={() =>
                  removeImage(index)
                }
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8"
              >
                ✕
              </button>

              {index === 0 && (
                <div className="absolute bottom-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  Cover
                </div>
              )}
            </div>

          ))}

        </div>

      )}

    </div>
  );
}