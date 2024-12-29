'use client'
import { useState } from "react";
const slides = [
    {
        image: "https://www.asahijapanauto.com.bd/wp-content/uploads/2023/09/hybrid_service.jpg",
        title: "Affordable Price For Car Servicing",
        description: "There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form"
    },
    {
        image: "https://cdn.prod.website-files.com/64de12e2b7dad0d3dd226b9a/663cf39e84dbc946d84adce0_cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNTAyMTEwMzU4MjgtaW1hZ2UuanBn.png",
        title: "Quality Car Maintenance",
        description: "We Provide Top Quality Maintenance Services For Your Car"
    },
    {
        image: "https://www.mrclutch.com/blog/wp-content/uploads/2023/01/Photo-of-a-mechanic-completing-a-full-service-on-a-car.jpg",
        title: "Expert Mechanics",
        description: "Our Mechanics Are Highly Trained And Experienced"
    }
];

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  return (
    <div className="flex items-center justify-center bg-gray-100">
    <div className="relative w-full max-w-7xl max-h-[500px] overflow-hidden rounded-lg shadow-lg">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-[1280px] h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{slides[currentSlide].title}</h1>
            <p className="text-sm md:text-base text-white mb-4 md:mb-6">{slides[currentSlide].description}</p>
            <div className="flex space-x-2 md:space-x-4">
                <button className="bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded">Discover More</button>
                <button className="hover:border-primary text-white hover:bg-primary duration-300 px-2 py-1 md:px-4 md:py-2 rounded border">Latest Project</button>
            </div>
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-5 flex space-x-1 md:space-x-3">
            <button onClick={prevSlide} className="bg-gray-200 text-black p-1 md:px-2 rounded-full">
                <i className="fas fa-arrow-left"></i>
            </button>
            <button onClick={nextSlide} className="bg-red-500 text-white p-1 md:px-2 rounded-full">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</div>
  )
}
