import React from 'react';

type AdminHeaderProps = {
    title: any;
  };
  
  const AdminHeader: React.FC<AdminHeaderProps> = ({ title }) => {
    return (
       <header className="flex justify-between space-x-8 bg-white p-2">
        <h1 className="text-sm flex-none font-semibold mt-2 px-5 flex">
            Dashboard 
        <svg className="w-3 h-3 mt-1 mx-2 text-gray-800 font-bold dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
            
            <span className='font-bold'>Admin View</span>
        </h1>
        <div className="flex-1 w-2/3 space-x-4 mr-8 ">
        <input
        className=" h-10 w-2/3 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        placeholder="Search"
        type="search"
        />
        </div>
        <span className='flex flex-row order-last space-x-5 px-7'>
            <div className="  relative rounded-full">
                <span className="flex  rounded-full text-base font-bold">Administrator</span>
                <span className='text-sm font-semibold'>admin@allhome.com</span>
            </div>
        <button className='font-bold w-6 h-6 mt-2'>...</button>

        </span>


    </header> 
       
    );
}

export default AdminHeader;



{/* <header className="flex justify-between items-center pb-4">
<h1 className="text-xl font-semibold">Overview</h1>
<div className="flex items-center space-x-4">
  <input
    className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-64"
    placeholder="Search"
    type="search"
  />
  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    <img
      className="aspect-square h-full w-full"
      alt="Administrator"
      src="/placeholder.svg?height=32&amp;width=32"
    />
  </span>
  <span className="text-sm">Administrator</span>
  <a className="text-sm text-blue-600 hover:underline" href="#">
    admin@example.com
  </a>
</div>
</header> */}