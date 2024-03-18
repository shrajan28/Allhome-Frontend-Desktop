import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Header from '../Header';

type RegisterProps = {
  title: string;
};

const Register: React.FC<RegisterProps> = ({ title }) => {
    return (
        <div className="min-h-screen bg-[#111111A1] text-white ">
          <Header title=''/>
          <main className="py-12">
            <div className="max-w-4xl space-x-16 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className='mt-8 '>
                <h2 className="text-4xl font-bold mb-6">Alhome - largest Home retail shop in the world.</h2>
                <p className="mb-4">
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus
                  id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non
                  ultricies nibh elementum. Nulla ac nulla dolor.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 1
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 2
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 3
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 4
                  </li>
                </ul>
              </div>
              <div className=" bg-white rounded-lg shadow-lg p-6 mt-10">
              <div dir="ltr" data-orientation="horizontal">
                <div className="flex space-x-1 border-b">
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                  <Link to ="/">Sign in</Link>
                  </div>
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent border-blue-500 focus:outline-none focus:border-blue-500">
                    Register
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-y-4 mt-4">
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Name</span>
                      <input
                        type="text"
                        className=" h-10 w-full rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Email Address </span>
                      <input
                        type="text"
                        className=" h-10 w-full rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Phone Number</span>
                      <input
                        type="text"
                        className=" h-10 w-full rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>


                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold mt- text-[#323031]'>Password</span>
                      <input
                        type="password"
                        className=" h-10 w-full  rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="8+ Charecter"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold mt- text-[#323031]'>Confirm Password</span>
                      <input
                        type="password"
                        className=" h-10 w-full text-black rounded-md border border-input bg-background px-4 text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"                        
                        required
                      />
                    </div>
                    <Link to ="/DashboardFull">
                      <Button title="Process"/>
                    </Link>
                    <div>
                    <label htmlFor="terms" className="mt-2 text-sm text-gray-600">
                    <input
                      aria-hidden="true"
                      tabIndex={-1}
                      type="checkbox"
                      value="on"
                      className='mr-1'
                      // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
                    />
                        Do you agree to Alhome's Terms of Condition and Privacy Policy.
                    </label>
                    </div>
                    </form>
                  </div>
            </div>
            </div>
            </div>
            </div>
          </main>
          
        </div>
    );
}

export default Register;