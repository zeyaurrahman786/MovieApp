import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import toast from "react-hot-toast";
import Loading from '../components/Loading';
import isoTimeFormat from '../library/isoTimeFormat';
import { ClockIcon } from "lucide-react";

const SeatLayout = () => {

  const groupRows = [["A", "B"], ["C", "D"],["E", "F"],["G", "H"],["I", "J"]]
  
  const {id, date} = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if(show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handleSeatClick = (seatId) => {
    if(!selectedTime) {
      return toast("Please select time first");
    } if(!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast("You can select 5 seats only");
    }
    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(seat => seat !==  seatId) : [...prev, seatId])
  }

  useEffect(() => {
    getShow();
  })

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      
      {/* Available Timings  */}
       <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timings</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date].map((item) => (
            <div key={item.time} onClick={() => setSelectedTime(item)} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedTime?.time === item.time ? "bg-primary text-white" : "hover:bg-primary/20"}`}>
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default SeatLayout;