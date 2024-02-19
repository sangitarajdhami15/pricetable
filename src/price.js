import React from 'react';
import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { rows, anotherRows, screenerRows, lastRows } from './conts'

function Price() {
  const [showDropdown, setShowDropdown] = useState(false);
  const unlimited = 'unlimited';

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="App">
      <div className="container flex flex-col mx-auto p-2 relative">
        <table className="border">
          <thead>
            <tr>
              <th className="px-4 py-4 bg-gray-50">
                Show the detailed price
                <span style={{ display: 'inline-block', marginLeft: '5px', cursor: 'pointer' }} onClick={toggleDropdown}>
                  <ChevronDown style={{ display: 'inline', marginLeft: '5px', transform: showDropdown ? 'rotate(180deg)' : 'none' }} />
                </span>
              </th>
            </tr>
          </thead>
        </table>
        <div className={`absolute top-0 left-0 ${showDropdown ? 'block' : 'hidden'}`}>
          <div className="border rounded bg-white mt-2 p-2">

          </div>
        </div>
      </div>
      <div className="w-full bg-green relative">
        <div className="overflow-x-auto">
          <div className="w-full mx-auto p-4" >
            <table className=''>
              <tr>
                <th className="px-4 py-4 bg-gray-50 text-left">Features</th>
                <th className="px-4 py-4 bg-gray-50 ">Basic Free</th>
                <th className="px-4 py-4 bg-gray-50 ">Standard</th>
                <th className="px-4 py-4 bg-gray-50 ">Enterprise</th>
              </tr>

              <tr className="border">
                <td className="px-4 py-2 bg-green-100 text-left text-green-400 font-bold ">Summary</td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
              </tr>
              {rows?.map(rowKey => {
                return (
                  <tr className="border">
                    <td className="px-4 py-2">{rowKey.label}</td>
                    <td className="px-8 py-2 text-center">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isFree ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isStandard ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isEnterprise ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                  </tr>
                )
              })}
              <tr className="border">
                <td className="px-4 py-2 bg-green-100 text-left text-green-400 font-bold ">Screener</td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
              </tr>

              {anotherRows?.map(rowKey => {
                return (
                  <tr className="border">
                    <td className="px-4 py-2">{rowKey.label}</td>
                    <td className="px-8 py-2 text-center">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isFree ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isStandard ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isEnterprise ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                  </tr>
                );
              })}

              <tr className="border">
                <td className="px-4 py-2 bg-green-100 text-left text-green-400 font-bold ">Screener</td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
              </tr>
              {screenerRows?.map(rowKey => {
                return (
                  <tr className="border">
                    <td className="px-4 py-2">{rowKey.label}</td>
                    <td className="px-8 py-2 text-center">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isFree ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isStandard ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center ">
                      <span className='w-full flex justify-center'>
                        <CheckCircle2 className={rowKey.isEnterprise ? 'stroke-sbGreen' : 'stroke-sbGray'} />
                      </span>
                    </td>
                  </tr>
                );
              })}

              <tr className="border">
                <td className="px-4 py-2 bg-green-100 text-left text-green-400 font-bold ">Screener</td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
                <td className="px-8 py-15 bg-green-100"></td>
              </tr>
              {lastRows?.map(rowKey => {
                return (
                  <tr className="border">
                    <td className="px-4 py-2">{rowKey.label}</td>
                    <td className="px-8 py-2 text-center">
                      1
                    </td>
                    <td className="px-8 py-2 text-center">
                      <span className='w-full flex justify-center'>
                        {rowKey.isStandard ? <span className="unlimited">5/day</span> : null}
                      </span>
                    </td>
                    <td className="px-8 py-2 text-center">
                      <span className='w-full flex justify-center'>
                        {rowKey.isEnterprise ? <span className="unlimited">unlimited</span> : null}
                      </span>
                    </td>

                  </tr>
                );
              })}

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
