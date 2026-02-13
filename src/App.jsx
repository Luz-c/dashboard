import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import { MultiUser, Search, ArrowTop } from './utils/Icones'


const tableData = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },


]

function App() {

  return (
    <>
      <div className='flex flex-row bg-[#F0F0F0]' >
        <Sidebar />
        <div className='flex-1 pt-10 pl-17.75 pr-23.75 pb-19.5 overflow-x-hidden ' >
          <div className='flex flex-row justify-between items-start'>
            <div>
              <h1 className=' text-[#000000]'>Hello Evano 👋🏼,</h1>
            </div>
            <div className='relative flex flex-row items-center' >
              <div className='w-fit z-20 flex pl-10 pr-4 pt-2.5 pb-1.75 outline-none bg-white rounded-xl shadow-[0px_10px_0px_60px_0px_rgba(226,236,249,0.5)] '>
                <Search />
                <input type="text" placeholder='search'
                  className=' '
                />
              </div>


            </div>
          </div>

          <div className='bg-white rounded-2xl mt-10 w-full pt-7.75 pb-8.25 pl-12.5' >
            <div className='grid grid-cols-9 gap-20 items-center' >
              <div className='flex border-r-3 border-gray-100 col-span-3 flex-row items-center gap-5'>
                <div className='w-21 h-21 flex items-center justify-center rounded-full bg-linear-to-r from-[#D3FFE7] to-[#EFFFF6]'>
                  <MultiUser />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[#ACACAC] text-sm' >Total Customers</span>
                  <span className='text-[32px] font-semibold' >5,423</span>
                  <div className='flex text-[#00AC4F] flex-row items-center'>
                    <ArrowTop />
                    <p className='text-xs font-bold '  >
                      16%
                      <span className='font-normal text-black'>
                        {" "} this month
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className='w-0.5 col-span-1 bg-gray-100 h-full' ></div> */}

              <div className='flex col-span-3 border-r-3 border-gray-100 flex-row items-center gap-5'>
                <div className='w-21 h-21 flex items-center justify-center rounded-full bg-linear-to-r from-[#D3FFE7] to-[#EFFFF6]'>
                  <MultiUser />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[#ACACAC] text-sm' >Members</span>
                  <span className='text-[32px] font-semibold' >1,893</span>
                  <div className='flex text-[#D0004B] flex-row items-center'>
                    <span className='rotate-180' >
                      <ArrowTop />
                    </span>
                    <p className='text-nowrap text-xs font-bold '  >
                      1%
                      <span className='font-normal text-black'>
                        {" "} this month
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className='w-0.5 col-span-1 bg-gray-100 h-full' ></div> */}


              <div className='flex col-span-3 flex-row items-center gap-5'>
                <div className='w-21 h-21 flex items-center justify-center rounded-full bg-linear-to-r from-[#D3FFE7] to-[#EFFFF6]'>
                  <MultiUser />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[#ACACAC] text-sm' >Total Customers</span>
                  <span className='text-[32px] font-semibold' >5,423</span>
                  <div className='flex flex-row items-center'>
                    <img src="/1.png" alt="1" />
                    <img src="/2.png" alt="1" className='-ml-2' />
                    <img src="/3.png" alt="1" className='-ml-2' />
                    <img src="/4.png" alt="1" className='-ml-2' />
                    <img src="/5.png" alt="1" className='-ml-2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white mt-10 w-full pt-7.75 pb-8.25 px-12.5' >
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col  gap-1.75'>
                <h2 className='text-[22px] leading-[100%] tracking-[-1%] text-[#000000] font-semibold'>All Customers</h2>
                <p className='text-[14px] leading-[100%] tracking-[-1%] text-[#16C098] font-regular '>Active Members</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='relative flex flex-row items-center' >
                  <div className='w-fit z-20 -mr-8'>
                    <Search />
                  </div>

                  <input type="text" placeholder='search'
                    className='pl-10 pr-4 pt-2.5 pb-1.75 text-[12px] outline-none bg-white rounded-xl shadow-[0px_10px_0px_60px_0px_rgba(226,236,249,0.5)] '
                  />
                </div>
                <div className='relative flex flex-row items-center ' >
                  <div className=' bg-white rounded-xl shadow-[0px_10px_0px_60px_0px_rgba(226,236,249,0.5)] '>
                    <input type="text" placeholder='Shorty by:'
                      className='pl-10 pr-4 pt-2.5 pb-1.75 text-[12px] outline-none'
                    />
                    <span className='-ml-25 text-[12px] font-semibold '>Newest</span>
                  </div>
                </div>

              </div>
            </div>
            <div className='overflow-x-auto pt-10' >
              <table className='w-full text-left'>
                <thead className='text-sm font-medium text-[#B5B7C0]' >
                  <tr className='border-b border-gray-100' >
                    <th className='whitespace-nowrap pb-3.5'>Customer Name</th>
                    <th className='whitespace-nowrap pb-3.5'>Company</th>
                    <th className='whitespace-nowrap pb-3.5'>Phone Number</th>
                    <th className='whitespace-nowrap pb-3.5'>Email</th>
                    <th className='whitespace-nowrap pb-3.5'>Country</th>
                    <th className='whitespace-nowrap text-center w-20 pb-3.5'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index} className='border-b border-gray-100'>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'> {data.name} </td>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'> {data.company} </td>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'> {data.phone} </td>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'> {data.email} </td>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'> {data.country} </td>
                      <td className='max-w-sm text-gray-900 truncate whitespace-nowrap py-5'>
                        <button className={`px-3 py-1 w-full border font-medium rounded-sm ${data.status === 'Active' ? 'bg-[#16C09861] text-[#00B087] border-[#00B087] ' : 'bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]'}`} >
                          {data.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='flex py-8 flex-row justify-between items-center' >
              <p className='text-[#B5B7C0] font-medium ' >
                Showing data 1 to 8 of  256K entries
              </p>
              <div className='flex flex-row items-center' >
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  {'<'}
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-[#5932EA] text-white' >
                  1
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  2
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  3
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  ...
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  40
                </button>
                <button className='mx-1 px-3 py-1 rounded-sm bg-gray-100 text-gray-500' >
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
