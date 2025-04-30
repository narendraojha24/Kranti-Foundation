"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              KF
            </div>
          </div>
          <span className="font-bold text-xl">Kranti Foundation</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
            About
          </Link>
          <Link href="/donor-registration" className="text-gray-700 hover:text-red-600 transition-colors">
            Donor Registration
          </Link>
          <Link href="/request-blood" className="text-gray-700 hover:text-red-600 transition-colors">
            Request Blood
          </Link>
          <Link href="/donors" className="text-gray-700 hover:text-red-600 transition-colors">
            Donors
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
            Contact
          </Link>
          <Button className="bg-red-600 hover:bg-red-700">Donate Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/donor-registration"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donor Registration
            </Link>
            <Link
              href="/request-blood"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Blood
            </Link>
            <Link
              href="/donors"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donors
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 w-full" onClick={() => setIsMenuOpen(false)}>
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
