import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from './Search'


function Banner() { 

  const [showSearch, setShowSearch] = useState(false);

  const handleOpenSearch = () => setShowSearch(true);

  return (
    <div className='banner'> 
        <div className='banner__search'>    
          
            <Button onClick={handleOpenSearch}
             className='banner__searchButton' 
             variant='outlined'> Search Dates
             </Button>

            {showSearch && <Search triggerModal={true} onClose={() => setShowSearch(false)} />}

        </div>
        <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
            <Button variant='outlined'>
              Explore Nearby
            </Button>
        </div>
      
      
    </div>
  )
}

export default Banner
