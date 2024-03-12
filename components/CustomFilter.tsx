"use client"

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps, OptionsProps } from '@/types';
import { updateSearchParam } from '@/utils';


const CustomFilter = ({title, options}:CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const updateSearch = (e:{title:string; value: string}) => {
    const newPath = updateSearchParam(title, e.value.toLowerCase())
    router.push(newPath)
  }

  
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          updateSearch(e)
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate ">{selected.title}</span>
            <Image 
              src="/chevron-up-down.svg"
                width={20} 
                height={20} 
                alt="chevron-up-down" 
                className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition 
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active}) => `${active ? 'bg-primary-blue' : 'bg-white'} text-gray-900 cursor-pointer select-none relative py-2 px-4`}
                >
                  {({selected}) =>(
                    <span className={`block truncate ${selected ? 'font-medium': 'font-normal' }`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter