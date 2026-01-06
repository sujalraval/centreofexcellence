// src/components/events/EventsGalleryPage.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

interface EventImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const EventsGalleryPage = () => {
  // Event images data with more entries for the gallery page
  const allEventImages: EventImage[] = [
    { id: 1, src: "/studentactivities/1.png", alt: "Cultural Fest", category: "cultural" },
    { id: 2, src: "/studentactivities/2.png", alt: "Sports Event", category: "sports" },
    { id: 3, src: "/studentactivities/3.png", alt: "Tech Workshop", category: "academic" },
    { id: 4, src: "/studentactivities/4.png", alt: "Music Concert", category: "cultural" },
    { id: 5, src: "/studentactivities/5.png", alt: "Debate Competition", category: "academic" },
    { id: 6, src: "/studentactivities/6.png", alt: "Art Exhibition", category: "arts" },
    { id: 7, src: "/studentactivities/1.png", alt: "Science Fair", category: "academic" },
    { id: 8, src: "/studentactivities/2.png", alt: "Dance Competition", category: "cultural" },
    { id: 9, src: "/studentactivities/3.png", alt: "Chess Tournament", category: "sports" },
    { id: 10, src: "/studentactivities/4.png", alt: "Literary Festival", category: "academic" },
    { id: 11, src: "/studentactivities/5.png", alt: "Photography Exhibition", category: "arts" },
    { id: 12, src: "/studentactivities/6.png", alt: "Yoga Session", category: "sports" },
  ];

  const categories = ["all", "cultural", "sports", "academic", "arts"];
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter images based on selected category
  const filteredImages: EventImage[] =
    selectedCategory === "all"
      ? allEventImages
      : allEventImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gu-dark mb-4">
            Events Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our vibrant student life through photos of various events
            and activities
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full capitalize transition-colors ${
                selectedCategory === category
                  ? "bg-gu-primary text-white"
                  : "bg-white text-gu-dark border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gu-dark mb-2">{image.alt}</h3>
                <span className="text-xs text-gu-primary bg-gu-light px-3 py-1 rounded-full inline-block">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gu-primary text-white rounded-lg hover:bg-gu-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsGalleryPage;
