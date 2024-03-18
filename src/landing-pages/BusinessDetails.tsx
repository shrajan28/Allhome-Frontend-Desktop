import React from 'react';
import Button from '../Button';
import { FormattedMessage } from "react-intl";
import Header from '../Header';

type BusinessDetailsProps = {
    title: any;
  };
  
  const BusinessDetails: React.FC<BusinessDetailsProps> = ({ title }) => {
    return (
        <div>
          <Header title={""} />

        <div className="flex justify-center py-12 bg-[#111111A1]">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                        <h1 className="text-2xl font-semibold mb-6">Business Details</h1>
                        <div className="grid grid-cols-2 gap-4">
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'>Registered Business Name</span>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Registered Business Name"
                        />
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'>Bank Name</span>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Bank Name"
                        />
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'>Business Licence Number</span>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Business Licence Number"
                        />
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'>Account Number</span>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Account Number"
                        />
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'>Region</span>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r1p:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            data-placeholder=""
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="region"
                        >
                            <span >Region</span>
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
                            className="h-4 w-4 opacity-50"
                            aria-hidden="true"
                            >
                            <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'> Re-Enter Account Number</span>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Account Number"
                        />
                        </div>
                        <div className='space-y-2'>
                        <span className='text-sm font-semibold mb-4'> Business Address </span>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Business Address"
                        ></textarea>
                        </div>
                        <div className='space-y-2'>
                            <span className='text-sm font-semibold mb-4'> IBAN Number </span>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="IBAN Number"
                            />
                            </div>
                            <div className='row-end'>
                                <Button title={<FormattedMessage id="app.process"/>}/>
                            </div>
                        </div>
                        
                    

                        
                    </div>
                </div>
        </div>
        
    );
}

export default BusinessDetails;