'use client';

import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface Props {
   date: Date;
   onDateChange: (date: Date) => void;
}

const CalendarComponent = ({ date, onDateChange }: Props) => {
   const [showCalendar, setShowCalendar] = useState(false);

   const handleSelect = (ranges: any) => {
      const selectedDate = ranges.selection.startDate;
      onDateChange(selectedDate);
      setShowCalendar(false);
   };

   return (
      <div>
         <input
            className="w-full
            py-3
            px-4         
            bg-white 
            border-[1px]
            rounded-md
            placeholder-[##9094a9]
            focus:placeholder-[#bec3c9]
            outline-none
            focus:border-[#1877f2]
            transition-all
            disabled:opacity-70
            disabled:cursor-not-allowed"
            type="text"
            value={date.toLocaleDateString()}
            readOnly
            onClick={() => setShowCalendar(true)}
         />
         {showCalendar && (
            <div className="absolute z-10 top-0 left-[50%] transform translate-x-[-50%] xl:translate-x-0 mx-auto xl:left-[100%] shadow-md xl:ml-5">
               <DateRange
                  ranges={[
                     {
                        startDate: date,
                        endDate: date,
                        key: 'selection',
                     },
                  ]}
                  onChange={handleSelect}
                  showPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  direction="vertical"
                  showDateDisplay={false}
               />
            </div>
         )}
      </div>
   );
};

export default CalendarComponent;
