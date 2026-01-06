import { Link } from "react-router-dom";

import img1 from "../../assets/studentactivities/1.png";
import img2 from "../../assets/studentactivities/2.png";
import img3 from "../../assets/studentactivities/3.png";
import img4 from "../../assets/studentactivities/4.png";
import img5 from "../../assets/studentactivities/5.png";
import img6 from "../../assets/studentactivities/6.png";

/* -------------------- TYPES -------------------- */
interface EventImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

/* -------------------- COMPONENT -------------------- */
const EventsGallery = () => {
  const eventImages: EventImage[] = [
    { id: 1, src: img1, alt: "Cultural Fest", category: "Cultural" },
    { id: 2, src: img2, alt: "Sports Event", category: "Sports" },
    { id: 3, src: img3, alt: "Tech Workshop", category: "Academic" },
    { id: 4, src: img4, alt: "Music Concert", category: "Cultural" },
    { id: 5, src: img5, alt: "Debate Competition", category: "Academic" },
    { id: 6, src: img6, alt: "Art Exhibition", category: "Arts" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gu-dark">
            Student Life & Extracurricular Activities
          </h3>

          <Link
            to="/events"
            className="inline-flex justify-center px-6 py-2 bg-gu-primary text-white rounded-lg hover:bg-gu-dark transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Gallery */}
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
                loading="lazy"
              />

              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gu-dark mb-1">{image.alt}</h4>

                <span className="text-xs text-gu-primary bg-gu-light px-2 py-1 rounded-full inline-block">
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
