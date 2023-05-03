import React from 'react'

function index() {
  return (
    <div className="pt-24 mx-[5%]">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-5">
                <form action="">
                    {/* Job title */}
                    <div className="flex flex-col">
                        <label htmlFor="title">Write Job title</label>
                        <input className='focus:outline-none dark:bg-gray-200 p-2 rounded-lg' type="text" name="title" id="" placeholder='Job title ...' />
                    </div>
                </form>
            </div>
            <div className="col-span-7"></div>
        </div>
    </div>
  )
}

export default index;