import React from 'react'
import Product from './Product'

export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one',price:2000},
    {id:2,title:'product two',desc:'this is product two',price:2000},
    {id:3,title:'product three',desc:'this is product three',price:2000},
];
  return (
    <>
    <section className="rooms py-5" id="rooms">
  <div className="container py-5">
   
    <div className="row ">
     {products.map((products)=>{
      return <Product {...products} key={products.id}/>
     }


     )}

    </div>
  </div>
</section>

    </>
  )
}
