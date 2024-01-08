import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import conf from './conf/conf'

import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const databases = new Databases(client);


const App = () => {
  return (
    <div className='w-[90%] mx-auto mb-24'>
      <Loader />
      <Toaster />
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact databases={databases} />
    </div>
  )
}

export default App
