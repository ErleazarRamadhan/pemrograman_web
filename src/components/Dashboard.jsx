import React from 'react';
import Hero from './Hero.jsx';
import Summary from './Summary.jsx';
import UlasanSection from './UlasanSection.jsx';

export default function Dashboard({ jumlahProduk }) {
  return (
    <>
      <Hero />
      <Summary jumlahProduk={jumlahProduk} />
      <UlasanSection />
    </>
  );
}
