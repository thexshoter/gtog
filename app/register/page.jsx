'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from 'lucide-react'
import DailyCaloriesCalculator from '@/components/daily-calories-calculator'

export default function AuthForm() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [activityLevel, setActivityLevel] = useState("")
  const [calories, setCalories] = useState(null)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

 

  return (
    <Card className="min-h-screen flex items-center justify-center bg-background p-4">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <CardDescription>Complete the steps to authenticate</CardDescription>
      </CardHeader>
      <CardContent className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {step > i ? <CheckIcon className="w-5 h-5" /> : i}
                </div>
                {i < 3 && (
                  <div className={`w-[100px] h-1 ${
                    step > i ? 'bg-primary' : 'bg-secondary'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <span>Email</span>
            <span>Daily Calories Calculator</span>
            <span>Confirm</span>
          </div>
        </div>
        <form>
          {step === 1 && (
            <div>
                <div className="space-y-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="name"
                placeholder="Enter your name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-2">
                <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
            <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 rounded p-2"
            >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>

        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="space-y-2">
        <Label htmlFor="activityLevel">Activity Level</Label>
        <select
        id="activityLevel"
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className="border border-gray-300 rounded p-2"
        >
        <option value="" disabled>Select your activity level</option>
        <option value="sedentary">Sedentary (little to no exercise)</option>
        <option value="light">Light (light exercise 1-3 days/week)</option>
        <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
        <option value="active">Active (intense exercise 6-7 days/week)</option>
        <option value="veryActive">Very Active (very intense exercise daily)</option>
        </select>

        </div>
        <Button className="w-full" >Calculate Calories</Button>
        {calories === null && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Your estimated daily calorie needs:</p>
            <p className="text-3xl font-bold text-primary">{calories} calories</p>
          </div>
        )}
      </CardContent>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-2">
              <p>Please confirm your details:</p>
              <p>Email: {email}</p>
              <p>Password: ••••••••</p>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={step === 4 ? handleSubmit : handleNext}>
          {step === 3 ? 'Submit' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}