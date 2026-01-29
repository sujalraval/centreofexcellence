// src/components/events/EventsGalleryPage.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface EventImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const EventsGalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const eventImages: EventImage[] = [
    {
      id: 1,
      src: "/studentactivities/1.png",
      alt: "Cultural Fest",
      category: "cultural",
    },
    {
      id: 2,
      src: "/studentactivities/2.png",
      alt: "Sports Event",
      category: "sports",
    },
    {
      id: 3,
      src: "/studentactivities/3.png",
      alt: "Tech Workshop",
      category: "academic",
    },
    {
      id: 4,
      src: "/studentactivities/4.png",
      alt: "Music Concert",
      category: "cultural",
    },
    {
      id: 5,
      src: "/studentactivities/5.png",
      alt: "Debate Competition",
      category: "academic",
    },
    {
      id: 6,
      src: "/studentactivities/6.png",
      alt: "Annual Sports Day",
      category: "sports",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? eventImages
      : eventImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Student Activities & Events
        </h1>
        <p className="mt-2 text-gray-600">
          Explore cultural, academic, and sports events at our campus
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        {["all", "cultural", "academic", "sports"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-[#0a0e72] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <Link
            key={image.id}
            to="#"
            className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <span className="text-white text-sm font-medium">
                {image.alt}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/events-activities"
          className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
};

export default EventsGalleryPage;
