// src/components/home/EventsGallery.tsx
import { Link } from "react-router-dom";
import img1 from "../../assets/studentactivities/1.png";
import img2 from "../../assets/studentactivities/2.png";
import img3 from "../../assets/studentactivities/3.png";
import img4 from "../../assets/studentactivities/4.png";
import img5 from "../../assets/studentactivities/5.png";
import img6 from "../../assets/studentactivities/6.png";

const EventsGallery = () => {
  // Event images data with actual images
  const eventImages = [
    { id: 1, src: img1, alt: "Cultural Fest", category: "cultural" },
    { id: 2, src: img2, alt: "Sports Event", category: "sports" },
    { id: 3, src: img3, alt: "Tech Workshop", category: "academic" },
    { id: 4, src: img4, alt: "Music Concert", category: "cultural" },
    { id: 5, src: img5, alt: "Debate Competition", category: "academic" },
    { id: 6, src: img6, alt: "Art Exhibition", category: "arts" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between text-center items-center mb-8">
          <h3 className="text-3xl font-bold text-gu-dark">
            Student Life & Extracurricular Activities
          </h3>
          <Link
            to="/events"
            className="px-6 py-2 bg-gu-primary rounded-lg hover:bg-gu-dark transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gu-dark">{image.alt}</h4>
                <span className="text-xs text-gu-primary bg-gu-light px-2 py-1 rounded-full mt-2 inline-block">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
