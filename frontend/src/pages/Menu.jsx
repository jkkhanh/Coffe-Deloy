import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Pagination from '@mui/material/Pagination';


const Menu = () => {

  const {products} = useContext(ShopContext)
  const [filterProducts,setFilterProducts] = useState([])
  const [sortType, setSortType] = useState('macdinh');


   // Quản lý trang hiện tại và số sản phẩm mỗi trang
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;
 
   // Tính toán các chỉ số để lấy các sản phẩm của trang hiện tại
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filterProducts.slice(indexOfFirstItem, indexOfLastItem);


   const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Cuộn lên mượt mà
    });
  };


  const applyFilter = () => {
    let productCopy = products.slice()
    setFilterProducts(productCopy)
  }


  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch(sortType) {
      case 'low-high': 
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
        break;

      default:
        applyFilter()
        break;
          
    }

  }


  useEffect(() => {
    applyFilter();
  }, [products]);


  useEffect(() => {
    sortProduct()
  },[sortType])

  return (
    <div className='w-[1500px] mx-auto'>
      <div className='px-20 mt-10'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-2xl font-semibold text-orange-500'>THỰC ĐƠN CỦA CHÚNG TÔI CÓ GÌ?</p>
          </div>
          <div>
            <select onChange = {(e) => setSortType(e.target.value)} className='border px-2 py-2 outline-none'>
              <option value='macdinh'>Thứ tự mặc định</option>
              <option value='low-high'>Thứ tự theo giá: Từ thấp đến cao</option>
              <option value='high-low'>Thứ tự theo giá: Từ cao đến thấp</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-5 items-center justify-center gap-5 mt-10'>
          {
            currentItems.map((item,index) => (
              <div key={index} className='mb-6 hover:-translate-y-3 transition-transform duration-500'>
                <ProductItem  id={item._id} image={item.image} name={item.name} price={item.price} description={item.description}/>
              </div>
            ))
          }
        </div>

        <div className='flex items-center justify-center mt-2'>
          <Pagination 
            count={Math.ceil(products.length / itemsPerPage)} // Tính số trang dựa trên tổng số sản phẩm
            page={currentPage} // Trang hiện tại
            onChange={handlePageChange} // Xử lý khi thay đổi trang
            color="primary" 
            size="large" />
        </div>
      </div>
    </div>
  )
}

export default Menu