"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type Donor = {
  id: string
  name: string
  age: string
  bloodGroup: string
  email: string
  phone: string
  city: string
  lastDonationDate: Date | undefined
  status: "Available" | "Unavailable"
}

export type BloodRequest = {
  id: string
  patientName: string
  bloodGroup: string
  city: string
  hospitalName: string
  contactNumber: string
  urgencyLevel: string
  requestDate: Date
  status: "Pending" | "Fulfilled" | "Cancelled"
}

type AppContextType = {
  donors: Donor[]
  addDonor: (donor: Omit<Donor, "id" | "status">) => void
  bloodRequests: BloodRequest[]
  addBloodRequest: (request: Omit<BloodRequest, "id" | "requestDate" | "status">) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Initialize state from localStorage if available
  const [donors, setDonors] = useState<Donor[]>(() => {
    if (typeof window !== "undefined") {
      const savedDonors = localStorage.getItem("donors")
      return savedDonors ? JSON.parse(savedDonors) : []
    }
    return []
  })

  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>(() => {
    if (typeof window !== "undefined") {
      const savedRequests = localStorage.getItem("bloodRequests")
      return savedRequests ? JSON.parse(savedRequests) : []
    }
    return []
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("donors", JSON.stringify(donors))
    }
  }, [donors])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bloodRequests", JSON.stringify(bloodRequests))
    }
  }, [bloodRequests])

  const addDonor = (donor: Omit<Donor, "id" | "status">) => {
    const newDonor: Donor = {
      ...donor,
      id: Date.now().toString(),
      status: "Available",
    }
    setDonors((prev) => [...prev, newDonor])
  }

  const addBloodRequest = (request: Omit<BloodRequest, "id" | "requestDate" | "status">) => {
    const newRequest: BloodRequest = {
      ...request,
      id: Date.now().toString(),
      requestDate: new Date(),
      status: "Pending",
    }
    setBloodRequests((prev) => [...prev, newRequest])
  }

  return (
    <AppContext.Provider value={{ donors, addDonor, bloodRequests, addBloodRequest }}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
