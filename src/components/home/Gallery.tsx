"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getAllGalleries } from "@/services/galleryService";
import { Gallery as GalleryType } from "@/types/gallery";

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      const data = await getAllGalleries();

      const homepageGallery = data
        .filter(
          (item) =>
            item.featured &&
            item.status === "Published"
        )
        .sort(
          (a, b) =>
            new Date(b.eventDate).getTime() -
            new Date(a.eventDate).getTime()
        )
        .slice(0, 6);

      setGallery(homepageGallery);
    } catch (error) {
      console.error("Failed to load gallery:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Moments That Inspire
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            A glimpse of our community service activities,
            medical camps, education programs, environmental
            initiatives and volunteer efforts.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading gallery...
          </div>
        ) : gallery.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No gallery images available.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {gallery.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl shadow-lg group bg-white"
              >
                <div className="relative h-72">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-4 text-sm text-blue-700 font-medium">
                    {new Date(item.eventDate).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}

          </div>
        )}

        <div className="text-center mt-16">
          <Link
            href="/gallery"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
          >
            View Complete Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}