import React,{useState} from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from '../components/orders/OrderCard'
import BackButton from '/src/components/shared/BackButton.jsx'


const Orders = () => {

  const [status, setStatus] = useState("all");
  
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden '>
      <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
        <BackButton/>
        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Orders</h1>
        </div>
        <div className='flex item-center justify-around gap-4'>
          <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${ status === "all" && "bg-[#383838] rounded-lg px-4 py-2 font-semibold"} rounded-lg px-4 py-2 font-semibold`}>All</button>
          <button onClick={() => setStatus("Progress")} className={`text-[#ababab] text-lg ${status === "Progress" && "bg-[#383838] rounded-lg px-4 py-2 font-semibold"} rounded-lg px-4 py-2 font-semibold`}>In Progress</button>
          <button onClick={() => setStatus("Ready")} className={`text-[#ababab] text-lg ${status === "Ready" && "bg-[#383838] rounded-lg px-4 py-2 font-semibold"} rounded-lg px-4 py-2 font-semibold`}>Ready</button>
          <button onClick={() => setStatus("Completed")} className={`text-[#ababab] text-lg ${status === "Completed" && "bg-[#383838] rounded-lg px-4 py-2 font-semibold"} rounded-lg px-4 py-2 font-semibold`}>Completed</button>
        </div>
      </div>

      <div className='flex flex-wrap gap-6 px-14 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        
      </div>
      <BottomNav />
    </section>
  )
}

export default Orders
