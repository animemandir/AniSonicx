import React from 'react'
import Banner from '../components/Banner';
import { useQuery } from 'react-query';
import api from '../api/api'
import Carousel from '../components/Carousel';
import Popular from '../components/Popular';

function Home() {
  const { isLoading, error, data } = useQuery('TRENDING', api.FETCH_FROM_GRAPHQL.FETCH_TRENDING);
  if (error) console.log("useQuery ERROR :- " + error);
  return (
    isLoading ? <div>Loading...</div> :
      <div>
        <Banner slides={data} />
        <div className='my-4 mx-4 text-xl'>Recently updated</div>
        <Carousel name='RECENT' />
        <div className='my-4 mx-4 text-xl'>Popular on AniSonicx</div>
        <Popular />
      </div>
  )
}

export default Home;