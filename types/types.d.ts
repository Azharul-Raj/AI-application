import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

/**
 * CONTEXT DATA TYPES
 */
export interface InfoDataType {
  priceInfo: PriceInfoType;
  setPriceInfo: React.Dispatch<React.SetStateAction<PriceInfoType>>;
}
export interface PriceInfoType {
  price: string;
  priceId: string;
}
/**
 * Props types for components
 */
export interface PriceDataType {
  data: {
    id: number;
    plan:string;
    advantage:string[];
    price:string;
    priceId:string|any;
  };
}
