'use client';

import { useEffect } from "react";


export default function Page() {
  console.log('12312312312sss')
  useEffect(() => {
    console.log('12312312312')
  }, [])
  return <p>Customers Page</p>;
}