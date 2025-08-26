"use client"
import { useState, useEffect } from "react";
export default function DateFormat() {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);
     useEffect(() => {
    setCurrentDate(new Date())
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])
  if (!currentDate) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="p-8 text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    )
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const getDayOfWeek = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" })
  }

  const getMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long" })
  }
    return (
        <div className="flex flex-col gap-1 p-5 text-slate-600">
            <h6 className="text-2xl">{formatDate(currentDate)}</h6>
            <p>{formatTime(currentDate)}</p>
        </div>
    )
}