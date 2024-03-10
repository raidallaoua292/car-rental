"use client";

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react';

import { CarProps } from '@/types';
import { generateCarImageURL } from '@/utils';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car:CarProps;

}

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <>
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative max-w-lg w-full max-h-[90vh]  overflow-y-auto no-scrollbar bg-white rounded-2xl transform text-left shadow-xl transition-all flex flex-col gap-5 p-6"
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full "
                    onClick={closeModal}
                    title="Close">
                    <Image 
                      src='/close.svg'
                      width={20}
                      height={20}
                      alt="close icon"
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image 
                      src={generateCarImageURL(car)}
                      layout='fill'
                      priority 
                      objectFit='contain'
                      alt="car model"
                    />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src={generateCarImageURL(car,'29')}
                        layout='fill'
                        priority 
                        objectFit='contain'
                        alt="car model"
                      />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src={generateCarImageURL(car,'33')}
                        layout='fill'
                        priority 
                        objectFit='contain'
                        alt="car model"
                      />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image 
                        src={generateCarImageURL(car,'13')}
                        layout='fill'
                        priority 
                        objectFit='contain'
                        alt="car model"
                      />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="font-semibols text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {
                        Object.entries(car).map(([key, value]) => (
                          <div key={key} className="flex justify-between gap-5 w-full text-right">
                            <h4 className='text-gray-500 capitalize'>{key.split("_").join(" ")}</h4>
                            <p className='text-black-100 capitalize'>{value}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>

          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails