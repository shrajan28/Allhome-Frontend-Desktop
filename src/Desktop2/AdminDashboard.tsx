import React from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

type AdminDashboardProps = {
    title: any;
  };
  
  const AdminDashboard: React.FC<AdminDashboardProps> = ({ title }) => {
    return (
        <div className="">
            <AdminHeader title=""/>
            <div className="flex bg-gray-100 ">
                <div className="flex-1  p-4 rounded-lg ">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold">Overview</h1>
                </div>
                
                <div className="grid grid-cols-4  gap-4 mb-6">
                    
                    <div
                    className="border text-card-foreground shadow-sm bg-blue-100 p-4 rounded-lg flex items-center"
                    data-v0-t="card"
                    >
                    
                    <div>
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
                        className="h-6 w-6 text-blue-600 mr-3"
                    >
                        <path d="m7.5 4.27 9 5.15"></path>
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                        <path d="m3.3 7 8.7 5 8.7-5"></path>
                        <path d="M12 22V12"></path>
                    </svg>
                        <p className="text-sm font-medium">Active Orders</p>
                        <p className="text-lg font-semibold">36</p>
                    </div>
                    </div>
                    <div
                    className="border text-card-foreground shadow-sm bg-green-100 p-4 rounded-lg flex items-center"
                    data-v0-t="card"
                    >
                    
                    <div>
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
                        className="h-6 w-6 text-green-600 mr-3"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                        <p className="text-sm font-medium">Products</p>
                        <p className="text-lg font-semibold">2416</p>
                    </div>
                    </div>
                    <div
                    className="border text-card-foreground shadow-sm bg-yellow-100 p-4 rounded-lg flex items-center"
                    data-v0-t="card"
                    >
                    
                    <div>
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
                        className="h-6 w-6 text-yellow-600 mr-3"
                    >
                        <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
                        <path d="M6 9.01V9"></path>
                        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
                    </svg>
                        <p className="text-sm font-medium">Categories</p>
                        <p className="text-lg font-semibold">36</p>
                    </div>
                    </div>
                    <div
                    className="border text-card-foreground shadow-sm bg-purple-100 p-4 rounded-lg flex items-center"
                    data-v0-t="card"
                    >
                    
                    <div>
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
                        className="h-6 w-6 text-purple-600 mr-3"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                        <p className="text-sm font-medium">Customers</p>
                        <p className="text-lg font-semibold">13456</p>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-2  gap-4">
                    <div className="col-span-2 shadow-sm ">
                    <div className="relative w-full overflow-auto bg-white p-4 rounded-2xl my-4">
                    <h2 className="text-base font-semibold mb-4">Last Transactions</h2>
                        <table className="w-full caption-bottom text-sm">
                        <thead className="[&amp;_tr]:border-b bg-[#F2F4F5]">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                ISSUED DATE
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                PAYMENT MODE
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                TOTAL
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                ACTIONS
                            </th>
                            </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle  font-semibold">#5089</td>
                            <td className="p-4 align-middle  font-semibold">31 March 2023</td>
                            <td className="p-4 align-middle  font-semibold">Online - Card</td>
                            <td className="p-4 align-middle  font-semibold">$1200</td>
                            <td className="p-4 align-middle  font-semibold">
                            <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle  font-semibold">#5089</td>
                            <td className="p-4 align-middle  font-semibold">31 March 2023</td>
                            <td className="p-4 align-middle  font-semibold">COD</td>
                            <td className="p-4 align-middle  font-semibold">$1200</td>
                            <td className="p-4 align-middle  font-semibold">
                            <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle  font-semibold">#5089</td>
                            <td className="p-4 align-middle  font-semibold">31 March 2023</td>
                            <td className="p-4 align-middle  font-semibold">Store Credit</td>
                            <td className="p-4 align-middle  font-semibold">$1200</td>
                            <td className="p-4 align-middle  font-semibold">
                            <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle  font-semibold">#5089</td>
                            <td className="p-4 align-middle  font-semibold">31 March 2023</td>
                            <td className="p-4 align-middle  font-semibold">Online - Card</td>
                            <td className="p-4 align-middle  font-semibold">$1200</td>
                            <td className="p-4 align-middle  font-semibold">
                            <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                            </tr>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle  font-semibold">#5089</td>
                            <td className="p-4 align-middle  font-semibold">31 March 2023</td>
                            <td className="p-4 align-middle  font-semibold">Online - Card</td>
                            <td className="p-4 align-middle  font-semibold">$1200</td>
                            <td className="p-4 align-middle  font-semibold">
                            <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <div className="relative w-2/3 overflow-auto bg-white p-4 rounded-2xl  ">
                        <h2 className="text-base font-semibold mb-4 ">Active Orders</h2>
                            <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b bg-[#F2F4F5]">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                    ID
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                    CUSTOMER
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                    STATUS
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground ">
                                    TOTAL
                                </th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle  font-semibold">#6548</td>
                                    <td className="p-4 align-middle  font-semibold">Joseph Wheeler</td>
                                    <td className="p-4 align-middle  font-semibold text-[#FA8232]  ">Pending</td>
                                    <td className="p-4 align-middle  font-semibold">$299.12</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle  font-semibold">#6548</td>
                                    <td className="p-4 align-middle  font-semibold">Joseph Wheeler</td>
                                    <td className="p-4 align-middle  font-semibold text-[#2DB224] ">Completed</td>
                                    <td className="p-4 align-middle  font-semibold">$999.99</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle  font-semibold">#6548</td>
                                    <td className="p-4 align-middle  font-semibold">Joseph Wheeler</td>
                                    <td className="p-4 align-middle  font-semibold text-[#EE5858]  ">CANCEL</td>
                                    <td className="p-4 align-middle  font-semibold">$999.99</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>

                        <div className="relative w-1/3 overflow-auto bg-white p-4 rounded-2xl">
                            <h2 className="text-base font-semibold mb-4">Most Bought Products</h2>
                            <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b bg-[#F2F4F5]">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground  ">
                                    Total 10k+ Purchases
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground "></th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle  font-semibold">COFFEE TABLE - GOLD</td>
                                <td className="p-4 align-middle  font-semibold">35</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle  font-semibold">CENTER TABLE - GOLD</td>
                                <td className="p-4 align-middle  font-semibold">31</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle  font-semibold">COFFEE TABLE - BROWN</td>
                                <td className="p-4 align-middle  font-semibold">28</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle  font-semibold">COFFEE TABLE - BLACK</td>
                                <td className="p-4 align-middle  font-semibold">28</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                    </div>

                    </div>
                    <div>
                    
                    </div>
                </div>
                </div>
                <div className=" bg-card text-card-foreground shadow-sm bg-white" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-sm font-bold ">Activities</h3>
                    </div>
                    <div className="p-6">
                    <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                        <div className='bg-purple-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-purple-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-blue-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-red-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-yellow-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-green-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-pink-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-orange-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-blue-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-red-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>
                        <li className="flex items-start space-x-2">
                        <div className='bg-purple-300 h-5 w-5 rounded-full mt-2'/>
                        <div>
                            <p className="text-sm font-semibold">New order placed for $299.12</p>
                            <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default AdminDashboard;