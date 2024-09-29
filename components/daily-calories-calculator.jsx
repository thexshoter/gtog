"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DailyCaloriesCalculatorComponent() {
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [activityLevel, setActivityLevel] = useState("")
  const [calories, setCalories] = useState(null)

  const calculateCalories = () => {
    // Convert inputs to numbers
    const ageNum = parseInt(age)
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    // Basic BMR calculation using Harris-Benedict Equation
    let bmr
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weightNum) + (4.799 * heightNum) - (5.677 * ageNum)
    } else {
      bmr = 447.593 + (9.247 * weightNum) + (3.098 * heightNum) - (4.330 * ageNum)
    }

    // Activity level multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    }

    // Calculate total daily calories
    const totalCalories = bmr * activityMultipliers[activityLevel]
    setCalories(Math.round(totalCalories))
  }

  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Daily Calories Calculator</CardTitle>
      </CardHeader>
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
          <Select onValueChange={setGender}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
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
          <Select onValueChange={setActivityLevel}>
            <SelectTrigger id="activityLevel">
              <SelectValue placeholder="Select your activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
              <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (intense exercise 6-7 days/week)</SelectItem>
              <SelectItem value="veryActive">Very Active (very intense exercise daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={calculateCalories}>Calculate Calories</Button>
        {calories !== null && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Your estimated daily calorie needs:</p>
            <p className="text-3xl font-bold text-primary">{calories} calories</p>
          </div>
        )}
      </CardContent>
    </Card>)
  );
}