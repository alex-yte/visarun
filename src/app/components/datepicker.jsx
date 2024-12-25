"use client"

// import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { ru } from "date-fns/locale"


export default function DatePicker() {

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
            "w-auto h-[2rem] text-[1rem] p-[0.5rem] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-[1rem] w-[1rem]" />
          
          {date ? format(date, "ccc d MMM yy", { locale: ru }) : <span>Дата въезда</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto text-[2rem] p-[0.5rem]">
        <Calendar
            showOutsideDays={true}
            weekStartsOn= {1}
            locale={ru}
            mode="single"
            selected={date}
            onSelect={(selectedDate) => { setDate(selectedDate); getLastDay(selectedDate); }}
            initialFocus
            className="flex w-full h-full border rounded-md"
            classNames={{
                head_cell: "text-[1rem] w-8 rounded-sm",
                caption_label: "text-[1rem]",
                day: "text-[1rem] w-8 h-8 rounded-sm",
                weekdays: "text-[1rem] w-8 h-8 rounded-sm",
                nav_button: "text-[1rem] w-[2rem] h-[2rem]",
            }}
            components={{
            IconLeft: ({ className, ...props }) => (
                <ChevronLeft className={cn("h-[1.5rem] w-[1.5rem]", className)} {...props} />
            ),
            IconRight: ({ className, ...props }) => (
                <ChevronRight className={cn("h-[1.5rem] w-[1.5rem]", className)} {...props} />
            ),
            }}
        />
      </PopoverContent>
    </Popover>
  )
}
