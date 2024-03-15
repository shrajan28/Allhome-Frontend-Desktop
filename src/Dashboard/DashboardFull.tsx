import React from 'react';
import Header from '../Header';

type DashboardFullProps = {
    title: any;
  };
  
  const DashboardFull: React.FC<DashboardFullProps> = ({ title }) => {
    return (
        <div>
            <Header title=''/>
            <div className=" min-h-screen">
              <div className=" py-4 px-8  border-b bg-[#F2F4F5]">
                  <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              <div className="flex">
                <aside className=" bg-white h-1/2 p-6 border-r shadow-lg">
                  <nav className="space-y-1">
                    <a href="#" className="flex items-center text-white bg-[#0F30A5] p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span className='ml-2'>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                        <path d="M2 7h20"></path>
                        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                      </svg>
                      <span>Vendor Management</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <line x1="10" x2="21" y1="6" y2="6"></line>
                        <line x1="10" x2="21" y1="12" y2="12"></line>
                        <line x1="10" x2="21" y1="18" y2="18"></line>
                        <path d="M4 6h1v4"></path>
                        <path d="M4 10h2"></path>
                        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
                      </svg>
                      <span>Orders &amp; Transactions</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                      <span>Banking &amp; Approvals</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                      </svg>
                      <span>Log-out</span>
                    </a>
                  </nav>
                </aside>
                <main className="flex-1 p-6 bg-white">
                  <div className="  mb-6">
                    <div>
                      <h2 className="text-sm font-bold mb-1">Hello, Admin</h2>
                      <p className="text-sm text-gray-600 font-semibold">Please review the following Vendors</p>
                      <p className="text-sm text-blue-600 font-semibold list-disc">
                        <p>ABC Stores</p>
                        <p>Zayn Furnitures</p>
                        <p>AI more</p>
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-6">
                      <div className=" border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
                        <div className="flex flex-col space-y-1.5 p-6 shadow-sm">
                          <h3 className="font-bold whitespace-nowrap leading-none tracking-tight text-l">Account Info </h3>
                        </div>
                        <div className="p-6 text-sm ">
                          <p>ABC Store</p>
                          <p>East Tejgaon Bazaar, Word No. 04, Road No. 15J, House no. 120/5C, Flat No. 5D, Riyadth - 1200, SA</p>
                          <p>Phone Number: Add Number</p>
                          <p>Bank Name: Saudi National Bank</p>
                          <p>Account: 123XXXCXX345</p>
                        </div>
                        <div className="flex items-center p-6">
                        <button className="bg-transparent hover:bg-[#0F30A5] text-[#0F30A5] font-semibold hover:text-white py-2 px-4 border border-[#0F30A5] hover:border-transparent rounded">
                            Edit Details
                          </button>
                        </div>
                      </div>
                      <div className=" border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
                        <div className="flex flex-col space-y-1.5 p-6 shadow-sm">
                          <h3 className="font-bold whitespace-nowrap leading-none tracking-tight text-l">Business Details</h3>
                        </div>
                        <div className="p-6 text-sm">
                          <p>ABC Store</p>
                          <p>East Tejgaon Bazaar, Word No. 04, Road No. 15J, House no. 120/5C, Flat No. 5D, Riyadth - 1200, SA</p>
                          <p>Phone Number: Add Number</p>
                          <p>Bank Name: Saudi National Bank</p>
                          <p>Account: 123XXXCXX345</p>
                        </div>
                        <div className="flex items-center p-6">
                        <button className="bg-transparent hover:bg-[#0F30A5] text-[#0F30A5] font-semibold hover:text-white py-2 px-4 border border-[#0F30A5] hover:border-transparent rounded">
                            Edit Details
                          </button>
                        </div>
                      </div>
                      <div className="col-span-1 space-y-6">
                        <div className=" border bg-card text-card-foreground shadow-sm p-4" data-v0-t="card">
                          <div className='flex flex-row space-x-6 content-center ml-8'>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="text-gray-400 mt-3"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div>
                              <p className='font-bold'>34</p>
                              <p className='text-sm font-semibold'>Ongoing Orders</p>
                            </div>
                          </div>
                        </div>
                        <div className=" border bg-card text-card-foreground shadow-sm p-4" data-v0-t="card">
                          <div className='flex flex-row space-x-6 content-center ml-8'>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="text-gray-400 mt-3"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div>
                              <p className='font-bold'>149</p>
                              <p className='text-sm font-semibold'>Products</p>
                            </div>
                          </div>
                        </div>
                        <div className=" border bg-card text-card-foreground shadow-sm p-4" data-v0-t="card">
                          <div className='flex flex-row space-x-6 content-center ml-8'>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="text-gray-400 mt-3"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div>
                              <p className='font-bold'>SAR 13,450</p>
                              <p className='text-sm font-semibold'>Transiction Balance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6  shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-semibold">RECENT ORDER</h3>
                      <a href="#" className="text-[#FA8232] font-semibold  text-sm">
                        View All →
                      </a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead className='bg-[#F2F4F5] mt'>
                          <tr className="text-left text-gray-600">
                            <th className="py-2">Order ID</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Total</th>
                            <th className="py-2">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#FA8232] font-semibold ">IN PROCESS</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#2DB224] font-semibold ">COMPLETED</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#EE5858] font-semibold ">CANCELED</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
        </div>
    );
}

export default DashboardFull;