import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAppContext } from './utils/Context';


type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [locale ,setLoacale]=useState("en")
  const {languageHandle} =useAppContext();
  return (
    <div>
    <div className="bg-[#323031] text-white py-2 border border-[#645f5fa1]">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-sm font-bold"><FormattedMessage id="app.welcome"/></h1>
                <div className="flex items-center space-x-4">
                  <span className='text-[#645f5fa1] text-lg'>|</span>
                  <span className="text-sm flex font-bold" onClick={((e)=>{languageHandle("en")})}>Eng
                  <svg className="w-3 h-3  mt-1 ml-1 text-white-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                  </svg>
                  </span>
                  <span className="text-sm flex font-bold" onClick={((e)=>{languageHandle("ar")})}>SAR
                  <svg className="w-3 h-3  mt-1 ml-1 text-white-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                  </svg>
                  </span>
                </div>
            </div>
      </div>
      <div className="bg-[#323031] text-white py-3 h-18">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold"><FormattedMessage id="app.logo"/></h1>
      </div>
    </div>
    </div>

  )
};

export default Header;