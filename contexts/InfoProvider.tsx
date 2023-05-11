import { ContainerProps, InfoDataType, PriceInfoType } from '@/types/types';
import React, { createContext, useState } from 'react'

export const InfoContext=createContext<InfoDataType|any>(null);

function InfoProvider({children}:ContainerProps) {
    const [priceInfo,setPriceInfo]=useState<PriceInfoType>({price:"",priceId:""});

    const info:InfoDataType={priceInfo,setPriceInfo}
  return (
    <InfoContext.Provider value={info}>
        {children}
    </InfoContext.Provider>
  )
}

export default InfoProvider