import React from "react";
import avt1 from "../assets/huuda.jpg";
import avt2 from '../assets/tranmy.jpeg'
import avt3 from '../assets/linda.jpg'
import avt4 from '../assets/j97.jpg'
import Slider from "react-slick";

const testRiviewer = [
  {
    id: "v1",
    name: "Ông Đa - tổ trưởng",
    text: " Tôi năm nay hơn 70 tuổi rồi, mà chưa thấy quán coffe nào đẹp như này",
    img: avt1,
  },
  {
    id: "v2",
    name: "Trần My kem trộn",
    text: " Gái Nhật vô quán uống cảm thấy da trở nên đẹp đẽ hơn...mề ta na xi hề...",
    img: avt2,
  },
  {
    id: "v3",
    name: "Cô Linda",
    text: " Tôi thấy mà tôi thích á.....",
    img: avt3,
  },
  {
    id: "v4",
    name: "Trịnh Trần Phương Tuấn",
    text: "Là một thằng con trai nên vào đây thưởng thức hương vị của coffe tại quán này...",
    img: avt4,
  },
];

const Reviews = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[1500px] mx-auto">
      <div className="px-10 py-10 mt-16">
        <h1 className="text-center font-semibold text-3xl mb-10">
          NHẬN XÉT NGƯỜI DÙNG
        </h1>
        <div>
          <Slider {...settings}>
            {testRiviewer.map((item) => (
              <div key={item.id} className="px-3 py-5" data-aos="fade-up" data-aos-delay={`${item.id * 400}`}>
                <div className="py-3 px-6 h-56 rounded-xl border shadow-md">
                  <div className="flex items-center gap-6">
                    <img src={item.img} alt="" className="w-16 h-16 rounded-full"/>
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm italic text-gray-600 font-semibold">
                        Người dùng ở quán
                      </p>
                    </div>
                  </div>
                  <p className="mt-6">"{item.text}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
