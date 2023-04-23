import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz logo" className='w-28' object-contain />
            

            <button
                type='button'
                onClick={() => window.open('https://github.com/omeshsachethana')}
                className="black_btn"
            >
                Github
            </button>
        </nav>
        <h1 className='main_heading'>Summarizrr</h1>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='purple_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Summarizrr is an open-source article summarizer that can simplify your reading by transforming long articles into clear and concise summaries
        </h2>
    </header>
  )
}


export default Hero