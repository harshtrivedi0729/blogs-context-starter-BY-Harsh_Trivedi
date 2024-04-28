import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  // j value joiye ye apde ahiya lakhishu and useContext HOOk ni help te jya aa data mali shake te jagiya nu nam(ahiya AppContext) lakhishu
   const {page, handlePageChange, totalPages} = useContext(AppContext); 

  return (
    // apde jyare scroll kariye tyare aa apdu heading che te aek jagiyaye "fixed" rahe te mate apde avi rite lakhelu che and Background color pan atle j apelo che j thi content a apda hearder niche thi jay tyare apanane na dekhay.......avu same vstu apde footer mate karishu
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        {/* apde condition lagavavi hoy to to apde curly brackets[{}] ma lakhvu pade */}
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
        }

        { page < totalPages && 
                (<button 
                className='rounded-md border-2 px-4 py-1'
                onClick={() =>handlePageChange(page+1) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm'>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
