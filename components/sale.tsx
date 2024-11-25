"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 15,
    minutes: 45,
    seconds: 23,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return timeLeft
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="text-4xl font-bold bg-red-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-2">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-sm text-muted-foreground uppercase">{label}</div>
  </div>
)

export default function Sale() {
  const timeLeft = useCountdown()

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/deal_of_the_week.png"
              alt="Deal of the week"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-8">
            <div className="text-center lg:text-right">
              <h2 className="text-4xl font-bold mb-2">Deal Of The Week</h2>
              <p className="text-muted-foreground">Limited time offer</p>
            </div>

            <div className="flex gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>

            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="/categories">Shop Now</a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}