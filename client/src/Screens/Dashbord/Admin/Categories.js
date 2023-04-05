import React , {useState} from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import { categoriesData } from '../../../Data/categoriesData'
import SideBar from '../SideBar'
import CategoryModal from '../../../Components/Modals/CategoryModal'


const Categories = () => {
  const [modalOpen , setModalOpen]=useState(false)
  return (
    <SideBar>
      <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          <div className='flex flex-col gap-6'>
    <div className='flex-btn gap-2'>
    <h2 className='text-xl font-bold'>Categories</h2>
    <button
    onClick={()=>setModalOpen(true)}
     className='bg-subMain flex-rows font-medium transition hover:bg-main border border-subMain text-white py-2 px-4 rounded '>
        <HiPlusCircle/> Create
    </button>
    </div>
    <Table2 data={categoriesData} users={false}/>
</div>
    </SideBar>
  )
}

export default Categories