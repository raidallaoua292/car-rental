"use client"

import React,{ useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'

import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'

const SearchButton = ({otherClasses}:{otherClasses: string}) => {
    return (
      <button type="submit" className={`-ml-11 z-10 ${otherClasses}`} title='search'>
          <Image 
            src='/magnifying-glass.svg'
            width={40}
            height={40}
            alt="search icon"  
            objectFit='contain'
          />
      </button>
    )
}


const SearachBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleSearach = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(manufacturer === '' && model === ''){
      return alert('Please fill in the search fields')
    }
    updateSearchParam(manufacturer.toLowerCase(), model.toLowerCase())

  }

  const updateSearchParam = (manufacturer:string, model:string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if(model){
      searchParams.set('model', model)
    }
    else{
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    }
    else{
      searchParams.delete('manufacturer')
    }

    const newPath = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPath,{scroll:false})
  }

  return (
    <form className="searchbar" 
      onSubmit={handleSearach}
    >
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div className="searchbar__item ">
          <Image
            src='/model-icon.png'
            width={25}
            height={25}
            alt="model icon"
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input
            type="text"
            name='model'
            placeholder="Tiguan"
            value={model}
            onChange={(e)=>setModel(e.target.value)}
            className="searchbar__input"
          />
          <SearchButton otherClasses="max-sm:hidden"/>
      </div>
    </form>
  )
}
export default SearachBar