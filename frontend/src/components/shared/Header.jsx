import React from 'react';
import logo from '../../assets/pics/logo1.png';
import search from '../../assets/pics/search.png';
import bell from '../../assets/pics/bell.png';
import profile from '../../assets/pics/profile.png';
import { MdDashboard } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { logout } from '../../https/index';
import { removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';




const Header = () => {

  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* logo */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
          DinerDash
        </h1>
      </div>

      {/* Search */}
      <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]'>
        <img src={search} className='w-7 invert'/>
        <input type="text" placeholder='Search' className='bg-[#1f1f1f] outline-none text-[#f5f5f5]'/>
      </div>

      {/* Logged user*/}
      <div className='flex items-center gap-4'>
        {
          userData.role === "admin" &&(
            <div onClick={() => navigate("/dashboard")} className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
              <MdDashboard className="text-[#f5f5f5] text-2xl" />
            </div>
        )}
        <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
          <img src={bell} className='w-5 invert'/>
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
          <img src={profile} className='w-7 invert'/>
          <div className='flex flex-col items-start'>
            <h1 className='text-md text-[#f5f5f5] font-semibold'>{userData.name || "TEST USER"}</h1>
            <p className='text-xs text-[#ababab] font-medium'>{userData.role || "Role" }</p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="text-[#f5f5f5] ml-2"
            size={40}
          />        
        </div>
      </div>
    </div>

  )
}

export default Header
