import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Statistics() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-red-600">1000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-medium">Lives Saved</p>
              <p className="text-gray-600 mt-2">Through blood donations and timely support</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-red-600">500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-medium">Registered Donors</p>
              <p className="text-gray-600 mt-2">Committed individuals ready to donate</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-red-600">50+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-medium">Blood Donation Camps</p>
              <p className="text-gray-600 mt-2">Organized across multiple cities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
