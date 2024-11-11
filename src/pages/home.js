import ProductCard from "../components/productCard";

function Home(){
    const products =  [
        {
          id: 1,
          name: 'Nike Air MX Super 2500 - Red',
          image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDgxfHxwcm9kdWN0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=500',
          discount: 39,
          price: 449,
          originalPrice: 699,
          rating: 5,
        },
        {
          id: 2,
          name: 'Adidas UltraBoost 2020 - Black',
          image: 'https://images.unsplash.com/photo-1573767225713-c5f6cbfc05ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDgxfHxwcm9kdWN0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=500',
          discount: 25,
          price: 199,
          originalPrice: 265,
          rating: 4,
        },
        {
          id: 3,
          name: 'Puma RS-X3 Puzzle - White',
          image: 'https://images.unsplash.com/photo-1579531660637-b7cfa2073cd3?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 30,
          price: 179,
          originalPrice: 259,
          rating: 4,
        },
        {
          id: 4,
          name: 'Reebok Classic Leather - Grey',
          image: 'https://images.unsplash.com/photo-1620031735863-d3204578fbb9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 15,
          price: 129,
          originalPrice: 149,
          rating: 4,
        },
        {
          id: 5,
          name: 'New Balance 574 - Blue',
          image: 'https://images.unsplash.com/photo-1590763502157-d6b370e194a2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 20,
          price: 89,
          originalPrice: 112,
          rating: 4,
        },
        {
          id: 6,
          name: 'Nike Air Max 270 React - Black',
          image: 'https://images.unsplash.com/photo-1598466184396-9e9f3de477a0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 10,
          price: 179,
          originalPrice: 199,
          rating: 4,
        },
        {
          id: 7,
          name: 'Under Armour HOVR Phantom 2 - Red',
          image: 'https://images.unsplash.com/photo-1606766513617-f04889d27106?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDkxfHxiaXJlZCUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 25,
          price: 199,
          originalPrice: 265,
          rating: 5,
        },
        {
          id: 8,
          name: 'Asics Gel-Kayano 27 - Yellow',
          image: 'https://images.unsplash.com/photo-1604671482499-5b8d06b6d2d9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDkxfHxiaXJlZCUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 30,
          price: 139,
          originalPrice: 199,
          rating: 4,
        },
        {
          id: 9,
          name: 'Saucony Endorphin Pro 2 - Green',
          image: 'https://images.unsplash.com/photo-1598602908969-f200f14a1593?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 15,
          price: 169,
          originalPrice: 199,
          rating: 5,
        },
        {
          id: 10,
          name: 'Vans Old Skool - White',
          image: 'https://images.unsplash.com/photo-1573814123851-ef8f72a0583f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=500',
          discount: 20,
          price: 59,
          originalPrice: 74,
          rating: 4,
        }
      ];
      
      
    return (<>
    
    <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-gray-700 text-white"
              >
                Our Most Trending Product
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              The hottest styles that everyone’s talking about! Don't miss out on the latest and greatest in footwear!
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center  ">
          {
            products.map(function (product){
              return  <ProductCard key={product.id} product={product} />
            })
            }
        </div>
      </div>
    </section>
    </>);
}

export default Home;