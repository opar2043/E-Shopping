
import { useEffect, useState } from 'react'
import Title from '../Shared/Title'
import Banner from './Banner'
import Card from '../Collection/Card';
import Subscribe from '../Root/Subscribe';
import Policy from './Policy';

const Home = () => {
  const [card , setCard] = useState([]);

  useEffect(()=>{
    fetch('./product.jsx')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCard(data)
    })
  },[])
  // console.log(card);

  return (
    <div>
        <Banner></Banner>
        <Title head={'Our'} head2={'Collection'} para={'Check our latest arraivals to know aboutb us!'}></Title>
         <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {
              card && card.slice(0,12).map(( car , idx) => <Card key={idx}  img={car.image} price={car.price} name={car.name} id={car._id}></Card>)
            }
         </div>
         <Policy></Policy>
         <Subscribe></Subscribe>
    </div>
  )
}

export default Home