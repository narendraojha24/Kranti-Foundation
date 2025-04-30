"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Array of blood donation themed images
const slideImages = [
  {
    url: "blood1.jpeg",
    alt: "Blood donation camp",
    title: "BLOOD DONATION",
    subtitle: "SAVES LIVES",
    description: "Your donation can save up to three lives. Be a hero today!",
  },
  {
    url: "blood2.jpeg",
    alt: "Blood transfusion",
    title: "EVERY DROP",
    subtitle: "COUNTS",
    description: "A single unit of blood can make a life-changing difference.",
  },
  {
    url: "blood3.jpeg",
    alt: "Blood donor",
    title: "BE A HERO",
    subtitle: "DONATE BLOOD",
    description: "Heroes don't always wear capes. Sometimes they roll up their sleeves.",
  },
  {
    url: "blood4.jpeg",
    alt: "Blood types",
    title: "SHARE LIFE",
    subtitle: "GIVE BLOOD",
    description: "Your blood type is someone's lifeline. Donate regularly.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))
  }

  return (
    <div className="bg-gradient-to-r from-red-100 via-white to-red-100 py-12 md:py-16 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full max-w-4xl mb-8 h-[300px] md:h-[400px]">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full flex flex-col items-center justify-center">
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${slide.url})` }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-white p-6 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-handwriting drop-shadow-lg">
                  {slide.subtitle}
                </h2>
                <p className="text-lg mb-6">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gray-100 text-red-600 p-3 rounded-full z-20 shadow-md transition-all"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gray-100 text-red-600 p-3 rounded-full z-20 shadow-md transition-all"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-800">Together, We're Stronger</h3>
      <p className="max-w-md text-center text-gray-700 mb-8">
        Your blood donation can save up to three lives. Join our mission to ensure blood availability for all in need.
        Every drop counts!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg shadow-lg transition-all">
          <Link href="/donor-registration">Become a Donor</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-lg transition-all"
        >
          <Link href="/request-blood">Request Blood</Link>
        </Button>
      </div>

      <div className="flex justify-center items-center space-x-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-red-600 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>



          <div className="mt-4 text-gray-600">
            <p className="text-right italic">
              Stay informed, follow us:
              <span className="flex justify-end mt-2 space-x-2">
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
