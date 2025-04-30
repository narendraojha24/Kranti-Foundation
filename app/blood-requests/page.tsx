"use client"

import { useAppContext } from "@/context/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data for blood requests (will be combined with real data)
const mockRequests = [
  {
    id: "mock1",
    patientName: "Amit Kumar",
    bloodGroup: "O+",
    city: "Mumbai",
    hospitalName: "City Hospital",
    contactNumber: "9876543210",
    urgencyLevel: "high",
    requestDate: new Date("2024-04-28"),
    status: "Pending",
  },
  {
    id: "mock2",
    patientName: "Neha Singh",
    bloodGroup: "AB-",
    city: "Delhi",
    hospitalName: "Apollo Hospital",
    contactNumber: "9876543211",
    urgencyLevel: "critical",
    requestDate: new Date("2024-04-29"),
    status: "Pending",
  },
]

export default function BloodRequestsPage() {
  const { bloodRequests } = useAppContext()
  const [searchTerm, setSearchTerm] = useState("")
  const [urgencyFilter, setUrgencyFilter] = useState<string | undefined>(undefined)

  // Combine mock requests with real requests from context
  const allRequests = [...mockRequests, ...bloodRequests]

  // Filter requests based on search term and urgency level
  const filteredRequests = allRequests.filter((request) => {
    const matchesSearch =
      request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.hospitalName.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesUrgency = urgencyFilter ? request.urgencyLevel === urgencyFilter : true

    return matchesSearch && matchesUrgency
  })

  // Get urgency badge color
  const getUrgencyBadgeClass = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // Get urgency display text
  const getUrgencyDisplayText = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "Critical"
      case "high":
        return "High"
      case "medium":
        return "Medium"
      case "low":
        return "Low"
      default:
        return urgency
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Blood Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allRequests.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Critical Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {allRequests.filter((r) => r.urgencyLevel === "critical").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allRequests.filter((r) => r.status === "Pending").length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search by patient name, city or hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={undefined}>All Urgency Levels</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Blood Requests</CardTitle>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/request-blood">New Request</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {filteredRequests.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Blood Group</TableHead>
                  <TableHead>Hospital</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Urgency</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.patientName}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                        {request.bloodGroup}
                      </Badge>
                    </TableCell>
                    <TableCell>{request.hospitalName}</TableCell>
                    <TableCell>{request.city}</TableCell>
                    <TableCell>{new Date(request.requestDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={getUrgencyBadgeClass(request.urgencyLevel)}>
                        {getUrgencyDisplayText(request.urgencyLevel)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          request.status === "Pending"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            : request.status === "Fulfilled"
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }
                      >
                        {request.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No blood requests found matching your search criteria. Please try different filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
