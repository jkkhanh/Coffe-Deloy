import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import remove from '../assets/remove-icon.png';
import edit from '../assets/icons8-edit-96.png';
import upload from '../assets/upload.jpg'
import remove_image from '../assets/icons8-remove-96.png'
import { Dialog, DialogActions, DialogContent, TextField, Button } from '@mui/material';



const formatPrice = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};



const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleOpenEditDialog = (product) => {
    setCurrentProduct(product);
    setProductData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image1: product.image[0] || null,
      image2: product.image[1] || null,
      image3: product.image[2] || null,
      image4: product.image[3] || null,
    });
    setOpenDialog(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setProductData({
      ...productData,
      [name]: files[0],
    });
  };

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('productId', currentProduct._id);
      formData.append('name', productData.name);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
  
      // Kiểm tra và thêm dữ liệu ảnh
      if (productData.image1) {
        if (productData.image1 instanceof File) {
          formData.append('image1', productData.image1); // Thêm ảnh mới
        } else {
          formData.append('image1Url', productData.image1); // Thêm URL ảnh cũ
        }
      }
  
      if (productData.image2) {
        if (productData.image2 instanceof File) {
          formData.append('image2', productData.image2);
        } else {
          formData.append('image2Url', productData.image2);
        }
      }
  
      if (productData.image3) {
        if (productData.image3 instanceof File) {
          formData.append('image3', productData.image3);
        } else {
          formData.append('image3Url', productData.image3);
        }
      }
  
      if (productData.image4) {
        if (productData.image4 instanceof File) {
          formData.append('image4', productData.image4);
        } else {
          formData.append('image4Url', productData.image4);
        }
      }
  
      // Gửi dữ liệu lên server
      const response = await axios.put(`${backendUrl}/api/product/edit`, formData, { headers: { token } });
  
      if (response.data.success) {
        toast.success('Sản phẩm đã được cập nhật');
        setOpenDialog(false);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Có lỗi xảy ra khi cập nhật sản phẩm');
    }
  };
  

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="pr-14">
      <p className="mt-8 text-2xl font-semibold mb-3">DANH SÁCH SẢN PHẨM</p>
      <div className="flex flex-col gap-2 mt-6">
        <div className="bg-blue-500 px-2 py-2 text-white grid grid-cols-[1.2fr_2fr_2fr_1fr_0.55fr]">
          <b>Hình ảnh</b>
          <b>Tên sản phẩm</b>
          <b>Loại sản phẩm</b>
          <b>Price</b>
          <b>Hoạt động</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="grid items-center grid-cols-[1.2fr_2fr_1.6fr_1fr_0.5fr] border">
            <img src={item.image[0]} alt="" className="w-20" />
            <p className="text-amber-600 font-semibold">{item.name}</p>
            <p>{item.category}</p>
            <p>{formatPrice(item.price)}</p>
            <div className="flex items-center gap-2">
              <img onClick={() => handleOpenEditDialog(item)} src={edit} alt="" className="w-7 cursor-pointer" />
              <img onClick={() => removeProduct(item._id)} src={remove} alt="" className="w-7 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <h1 className="text-center text-2xl font-semibold mt-5">CHỈNH SỬA SẢN PHẨM</h1>
        <DialogContent>
          <div className='relative w-full mt-5'>
            <label className='absolute top-[-14px] left-5 bg-white px-1 text-base font-semibold text-black'>Tên sản phẩm</label>
            <input id="name" placeholder="Tên sản phẩm..."  name="name" value={productData.name} onChange={handleInputChange}  className='w-full border outline-none rounded-lg text-base resize-none px-3 py-2.5' />
          </div>

          <div className='relative w-full mt-5'>
            <label className='absolute top-[-14px] left-5 bg-white px-1 text-base font-semibold text-black'>Mô tả</label>
            <textarea id="description" placeholder="Nhập thông tin..."  name="description" value={productData.description} onChange={handleInputChange} className='w-full h-32 border outline-none rounded-lg text-base resize-none px-3 py-2.5' />
          </div>

          <div className='relative w-full mt-5'>
            <label className='absolute top-[-14px] left-5 bg-white px-1 text-base font-semibold text-black'>Giá sản phẩm</label>
            <input id="price" placeholder="Giá sản phẩm..."  name="price" value={productData.price} onChange={handleInputChange} className='w-full border outline-none rounded-lg text-base resize-none px-3 py-2.5' />
          </div>

          <div className='relative w-full mt-5'>
            <label className='absolute top-[-14px] left-5 bg-white px-1 text-base font-semibold text-black'>Loại sản phẩm</label>
            <input id="category" placeholder="Loại sản phẩm"   name="category" value={productData.category} onChange={handleInputChange} className='w-full border outline-none rounded-lg text-base resize-none px-3 py-2.5' />
          </div>

          <p className='mt-6 text-red-500 font-semibold text-xs mb-2'>*Tải hình ảnh lên</p>
          <div className='flex items-center gap-5'>
            <label htmlFor='image1' className='relative'>
              <img src={productData.image1 ? (productData.image1 instanceof File ? URL.createObjectURL(productData.image1) : productData.image1) : upload }  alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <img src={remove_image} alt='' className='absolute w-5 top-0 right-0'/>
              <input type="file" name="image1" id='image1' onChange={handleImageChange} hidden/>
            </label>

            <label htmlFor='image2' className='relative'>
              <img src={productData.image2 ? (productData.image2 instanceof File ? URL.createObjectURL(productData.image2) : productData.image2) : upload }  alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <img src={remove_image} alt='' className='absolute w-5 top-0 right-0'/>
              <input type="file" name="image2" id='image2' onChange={handleImageChange} hidden/>
            </label>

            <label htmlFor='image3' className='relative'>
              <img src={productData.image3 ? (productData.image3 instanceof File ? URL.createObjectURL(productData.image3) : productData.image3) : upload }  alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <img src={remove_image} alt='' className='absolute w-5 top-0 right-0'/>
              <input type="file" name="image3" id='image3' onChange={handleImageChange} hidden/>
            </label>

            <label htmlFor='image4' className='relative'>
              <img src={productData.image4 ? (productData.image4 instanceof File ? URL.createObjectURL(productData.image4) : productData.image4) : upload }  alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <img src={remove_image} alt='' className='absolute w-5 top-0 right-0'/>
              <input type="file" name="image4" id='image4' onChange={handleImageChange} hidden/>
            </label>
            
          </div>
        </DialogContent>
        <DialogActions className='mt-5'>
          <button onClick={() => setOpenDialog(false)} className='px-6 py-2 border bg-blue-500 text-white font-semibold ' >Hủy</button>
          <button onClick={handleUpdateProduct} className='px-6 py-2 border bg-blue-500 text-white font-semibold ' >Cập nhật</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default List;
