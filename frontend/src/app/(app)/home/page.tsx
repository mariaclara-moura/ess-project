'use client'
import React, { useState } from 'react';
// import { ItensStyles } from './styles';
import { BlacLine, Photo} from './assets';
import Image from 'next/image';


export default function Home() {

  return (
    <div >
        <h1>Home</h1>
        <Image src={Photo} alt="Home" />
        <Image src={BlacLine} alt="BlacLine" />
    </div>
  );
}
