"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { Calendar as DayCalendar } from "@/Components/User/ui/calendar";
import { Button } from "@/Components/User/ui/button";

export function Calendar() {
  const [date, setDate] = React.useState(new Date());
  const [month, setMonth] = React.useState(new Date());

  const presets = [
    { label: "Today", value: 0 },
    { label: "Tomorrow", value: 1 },
    { label: "In 3 days", value: 3 },
    { label: "In a week", value: 7 },
    { label: "In 2 weeks", value: 14 },
  ];

  const handlePreset = (days) => {
    const newDate = addDays(new Date(), days);
    setDate(newDate);
    setMonth(newDate);
  };

  return (
    <div className="w-full border border-[#e6e0db] rounded-xl bg-white shadow-sm">
      
      {/* Calendar */}
      <div className="p-3">
        <DayCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          fixedWeeks
          className="p-0 w-full"
        />
      </div>

      {/* Presets */}
      <div className="border-t border-[#e6e0db] p-3 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
            onClick={() => handlePreset(preset.value)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
