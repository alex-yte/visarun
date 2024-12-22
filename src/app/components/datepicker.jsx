"use client"

// import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ru } from "date-fns/locale"


export function DatePicker() {

    function getLastDay(selectedDate) {
        
        let dateObject = new Date(selectedDate);
        if (isNaN(dateObject.getTime())) {
            document.getElementById('dateOutput').textContent = '';
            document.getElementById('daysOutput').textContent = '';
            return; // Exit the function
        }
    
        // Add 29 days
        dateObject.setDate(dateObject.getDate() + 29);
    
        const monthNames = [
            'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
            'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
        ];
    
        let day = dateObject.getDate();
        let monthName = monthNames[dateObject.getMonth()];
        let year = dateObject.getFullYear();
    
        let newDateFormatted = `${day} ${monthName} ${year}`;
        document.getElementById('dateOutput').textContent = newDateFormatted;
    
        // Calculate the days difference
        let today = new Date();
        const timeDifference = dateObject - today;
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
        document.getElementById('daysOutput').textContent = daysDifference;
    }
    


  const [date, setDate] = useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto h-[3rem] text-[2rem] p-[0.7rem] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-[1.8rem] w-[1.8rem]" />
          
          {date ? format(date, "d MMMM yyyy", { locale: ru }) : <span>Дата въезда</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto text-[3rem] p-[0.5rem]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => { setDate(selectedDate); getLastDay(selectedDate); }}
          initialFocus
          className="flex w-full h-full border rounded-md"
          classNames={{
            // months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            // month: "space-y-4 w-full flex flex-col",
            // caption_label: "text-lg",
            // table: "w-full h-full border-collapse space-y-1",
            // row: "w-full mt-2",
            head_cell: "text-[1.5rem] w-16 rounded-sm",
            caption_label: "text-[1.5rem]",
            day: "text-lg w-16 h-16 rounded-sm",
            weekdays: "text-lg w-16 h-16 rounded-sm",
            nav_button: "text-lg w-[2.5rem] h-[2.5rem]",
          }}
          components={{
            IconLeft: ({ className, ...props }) => (
              <ChevronLeft className={cn("h-[2rem] w-[2rem]", className)} {...props} />
            ),
            IconRight: ({ className, ...props }) => (
              <ChevronRight className={cn("h-[2rem] w-[2rem]", className)} {...props} />
            ),
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
