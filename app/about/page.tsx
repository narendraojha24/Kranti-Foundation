import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">About Blood Donation</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Donate Blood?</h2>
          <p className="text-gray-700 mb-4">
            Blood donation is a critical lifeline for many people. Donating blood can help patients suffering from
            life-threatening conditions live longer and with a higher quality of life.
          </p>
          <p className="text-gray-700 mb-4">
            When you donate blood, you're giving someone another chance at life. One donation can save up to three
            lives. The need for blood is constant, but the supply isn't.
          </p>
          <p className="text-gray-700 mb-4">
          Every 2 seconds, someone in the world needs blood — due to accidents, surgeries, childbirth complications, cancer treatments, or chronic illnesses.

One unit of donated blood can save up to three lives.
          </p>
          <p className="text-gray-700 mb-4">
          Regular donors may benefit from reduced risk of heart disease and improved iron regulation.

It offers a free mini health check-up — your blood pressure, hemoglobin, pulse, and more are tested.
          </p>
          <p className="text-gray-700 mb-4">
          Blood donation promotes community spirit, empathy, and social responsibility.Most donors adopt better health practices to stay fit for donation.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/blood2.jpeg"
            alt="Blood donation"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</div>
              Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sign up as a donor by filling out a simple form with your personal information and medical history.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</div>
              Screening
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A quick health check to ensure you're eligible to donate blood, including checking your hemoglobin levels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</div>
              Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>The actual blood donation takes only about 8-10 minutes. The entire process takes about an hour.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">Who Can Donate?</h2>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-12">
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 18 years old</li>
          <li>You must weigh at least 50 kg</li>
          <li>You must be in good health at the time of donation</li>
          <li>Your hemoglobin level must be at least 12.5 g/dL</li>
          <li>You must not have donated blood in the last 3 months</li>
          <li>You must not have any infectious diseases</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of Donating Blood</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>For the Donor</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free health screening</li>
              <li>Reduces risk of heart disease</li>
              <li>Stimulates blood cell production</li>
              <li>Burns calories</li>
              <li>Provides a sense of contribution to the community</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For the Recipient</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Saves lives in emergency situations</li>
              <li>Helps cancer patients undergoing chemotherapy</li>
              <li>Supports surgical procedures</li>
              <li>Helps people with blood disorders</li>
              <li>Assists in treating chronic diseases</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
