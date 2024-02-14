import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CreateCrudInput() {
    const [name, setName] = useState("")
    const [des, setDes] = useState("")
    const [alldata, setAlldata] = useState([])
    const [err, setErr] = useState("")
    const [render, setRender] = useState(true)
  
    useEffect(() => {
        const alldata = async () => {
            const data = await axios.get("http://localhost:8000/api/v1/crudroutes/alldata")
            setAlldata(data.data)
          
        }
        alldata()
    }, [render])

    const handleSubmit = async () => {
        const data = await axios.post("http://localhost:8000/api/v1/crudroutes/create", {
            name: name,
            des: des
        })

        if (data.data == "Data send") {
            setRender(!render)
            setName("")
            setDes("")
            setErr("")
        } else if (data.data = "Your all input is required") {
            setErr("Your all input is required")
        }
    }

  
  const handleDelete =async(item)=>{
    const data = await axios.post("http://localhost:8000/api/v1/crudroutes/delete",{
        id : item._id
    })
    setRender(!render)
  }


    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row gap-y-5 justify-center items-center py-8 md:py-0'>
                <div className='md:w-5/12 flex justify-center items-center'>
                    <div className='w-full md:pl-10'>
                        <div className='mt-6'>
                            <p className='font-inter font-bold text-base text-secondary mb-2'>Name</p>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='userName' placeholder='Name here' className='w-[300px] md:w-10/12 border border-gray p-3.5 rounded-[2px]' />
                        </div>


                        <div className='mt-6'>
                            <p className='font-inter font-bold text-base text-secondary mb-2'>Description</p>
                            <textarea value={des} onChange={(e) => setDes(e.target.value)} type="text" name='userEmail' placeholder='Enter your Description' className='w-[300px] md:w-10/12 border border-gray p-3.5 rounded-[2px]' />
                        </div>
                        {
                            err &&
                            <p className='text-[red]'>{err}</p>
                        }


                        <div className="flexjustify-center md:justify-start">
                            <button onClick={handleSubmit} className=' px-10 rounded-[2px] bg-black/80 py-3 text-white font-inter font-semibold text-lg mt-7'>Submit</button>
                        </div>

                    </div>

                </div>

            </div>
            <div>

                <div className='flex gap-5 flex-wrap mt-8'>
                    {
                        alldata &&
                        alldata.map((item,index)=>(
                        <div className='w-[300px] bg-black/90 text-white p-5 rounded-md'>
                            <h1 className='font-semibold text-xl font-inter mb-2'>{item.name}</h1>
                            <h1 className='font-sm text-sm font-inter mb-4'>{item.des}</h1>
                            <div className='flex gap-x-4'>
                                <button onClick={()=>handleDelete(item)} className='bg-white text-[red] font-inter text-base font-semibold px-4 py-2 rounded-sm'>Delete</button>
                                <button className='bg-white text-[green] font-inter text-base font-semibold px-4 py-2 rounded-sm'>Edit</button>

                            </div>
                        </div>

                        ))
                    }



                </div>


            </div>
        </div>
    )
}

export default CreateCrudInput