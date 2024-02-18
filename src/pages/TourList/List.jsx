import React, { useEffect } from 'react';
import { Card, Header } from '../../components';
import { useToursContext } from '../../contexts/ToursContext';

export const List = () => {
  const {
    state:{tours},
    getTours,
    getAllTours
  }=useToursContext()


  useEffect(()=>{
    async function fetchData(){
      let response = await getAllTours() 
      return response

    }

    fetchData()

  },[])

  console.log('====================================');
  console.log(tours.length);
  console.log('====================================');

  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='tour-main-div'>
        {
          tours && tours.map((tour,index)=>{
            return <Card key={index} tour={tour} image={`./../../utils/tours/${tour.imageCover}`}/>
          })
        }
        </div>
    </div>
  )
}