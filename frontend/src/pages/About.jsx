import React from 'react'
import about from '../assets/caffe.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='w-[1200px] mx-auto'>
      <p className='text-3xl text-center pt-8 border-t font-semibold'>GIỚI THIỆU VỀ CHÚNG TÔI</p>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-28'>
        <img src ={about} alt='' className='w-full md:max-w-[550px] h-[600px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-black'>
          <h2 className='text-xl text-center font-semibold'>COFFE HOME</h2>
          <p>Chào mừng bạn đến với <Link to ='/'><b className='hover:text-blue-600'>COFFE HOME </b></Link> –  Nơi hương vị cà phê đích thực và không gian ấm cúng chào đón bạn!</p>
          <p>Chào mừng bạn đến với <Link to ='/'><b className='hover:text-blue-600'>COFFE HOME </b></Link>, không gian lý tưởng để thư giãn, làm việc hay trò chuyện cùng bạn bè. Chúng tôi tự hào mang đến những ly cà phê đặc biệt, pha chế từ những hạt cà phê chất lượng, tươi ngon, cùng với thực đơn phong phú từ các loại trà, bánh ngọt và món ăn nhẹ.</p>
          <p>Tại <Link to ='/'><b className='hover:text-blue-600'>COFFE HOME </b></Link>, mỗi góc nhỏ đều được thiết kế tỉ mỉ để mang đến cảm giác thoải mái và gần gũi, tạo nên một không gian thật sự như ở nhà. Dù bạn đang tìm kiếm một nơi để làm việc, thưởng thức cà phê hay chỉ đơn giản là tận hưởng những khoảnh khắc yên bình, chúng tôi luôn chào đón bạn với những dịch vụ tận tâm và không gian ấm áp.</p>
          <p>Hãy đến và trải nghiệm không gian của chúng tôi – nơi mà mỗi tách cà phê là một câu chuyện, mỗi cuộc trò chuyện là một kỷ niệm đáng nhớ.</p>
          <p><b>Địa chỉ</b>: 19/8 Trần Văn Ơn, phường Nguyễn Văn Cừ, thành phố Quy Nhơn, tỉnh Bình Định</p>
          <p><b>Hotline:</b> 1900 8098</p>
          <p><Link to ='/'><b className='hover:text-blue-600'> COFFE HOME </b></Link> – Nơi phong cách của bạn tỏa sáng.</p>
        </div>
      </div>
      <p className='text-2xl font-semibold'>CHỌN CHÚNG TÔI?</p>
      <div className='flex flex-col md:flex-row text-sm mb-20 mt-10'>
        <div className='border w-1/3 px-6 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về chất lượng:</b>
          <p className='font-medium pl-1'>Chúng tôi luôn chú trọng đến chất lượng sản phẩm. Từng sản phẩm đều được chọn lọc kỹ lưỡng từ các nhà cung cấp uy tín, đảm bảo mang lại cho khách hàng trải nghiệm tuyệt vời.</p>
        </div>
        <div className='border w-1/3 px-6 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về giá cả và ưu đãi:</b>
          <p className='font-medium pl-1'>Chúng tôi luôn cố gắng mang đến sản phẩm chất lượng với mức giá cạnh tranh. Chúng tôi hợp tác trực tiếp với các nhà sản xuất và nhà cung cấp, giúp giảm thiểu chi phí trung gian và từ đó có thể cung cấp giá cả hợp lý hơn cho khách hàng mà không ảnh hưởng đến chất lượng sản phẩm.</p>
        </div>
        <div className='border w-1/3 px-6 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về chăm sóc khách hàng:</b>
          <p className='font-medium pl-1'>Dịch vụ chăm sóc khách hàng là ưu tiên hàng đầu của chúng tôi. Đội ngũ nhân viên của chúng tôi được đào tạo chuyên nghiệp và luôn sẵn sàng hỗ trợ bạn với bất kỳ thắc mắc nào mọi lúc mọi nơi. Bạn chỉ cần liên hệ chúng tôi sẽ giải đáp ngay cho bạn! Cảm ơn đã xem và ủng hộ</p>
        </div>
      </div>
    </div>
  )
}

export default About