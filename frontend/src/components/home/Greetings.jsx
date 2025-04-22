import React, {useState, useEffect, use} from 'react'
import { useSelector } from 'react-redux';

const Greetings = () => {
    const userData = useSelector((state) => state.user);
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const formatDate = (date) => {
      const month =[
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      return `${month[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    };

    const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      return `${hours}:${String(minutes).padStart(2, '0')} ${ampm}`
    };

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>
            Good Morning, {userData.name || "TEST USER"}
        </h1>
        <p className='text-[#ababab] text-sm'>
            Give your best services for customers ☺️
        </p>
      </div>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
        <p className='text-[#ababab] text-sm'>{formatDate(dateTime)}</p>
      </div>
    </div>
  )
}

export default Greetings
