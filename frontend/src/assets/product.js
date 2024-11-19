import cf1 from '../assets/cfmocha.png'
import cf2 from '../assets/cfamerica.png'
import cf3 from '../assets/expreso.png'
import cf4 from '../assets/cflatte.png'
import cf5 from '../assets/capuchino.png'
import cf6 from '../assets/cflattee.png'
import cf7 from '../assets/bacxiu.jpg'
import cf8 from '../assets/frosty1.png'
import cf9 from '../assets/frosty2.jpg'
import cf10 from '../assets/frosty3.jpg'
import cf11 from '../assets/frosty4.jpg'
import cf12 from '../assets/frosty5.png'
import ct1 from '../assets/ct1.jpg'
import ct2 from '../assets/ct2.jpg'
import ct3 from '../assets/ct3.png'
import ct4 from '../assets/ct4.png'





export const products = [
    {
        _id: "pr1",
        name: "Cafe Mocha",
        category: "Coffe",
        image: [cf1],
        price: 40000,
        description: "Hỗn hợp Espresso và chocolate nóng, kem tươi và chocolate sause béo ngậy, vị thơm."
    },
    {
        _id: "pr2",
        name: "Cafe Americano",
        category: "Coffe",
        image: [cf2],
        price: 45000,
        description: "Đậm chất Mỹ với nước nóng được pha vào Espresso giúp cà phê có độ đậm đặc biệt."
    },
    {
        _id: "pr3",
        name: "Cafe Expresso",
        category: "Coffe",
        image: [cf3],
        price: 30000,
        description: "Được pha chế bằng cách dùng nước nóng nén dưới áp suất cao qua bột cà phê được xay mịn."
    },
    {
        _id: "pr4",
        name: "Cafe Ice Latee",
        category: "Coffe",
        image: [cf4],
        price: 60000,
        description: "Cà phê đậm phong cách Ý được phối hợp với kem giúp giữ hương vị và tạo sự thơm ngon."
    },
    {
        _id: "pr5",
        name: "Cafe Capuchino",
        category: "Coffe",
        image: [cf5],
        price: 45000,
        description: "Đậm phong cách Ý với 3 phần : Cà phê Espresso pha lượng nước gấp đôi, sữa nóng, sủi bọt."
    },
    {
        _id: "pr6",
        name: "Cafe Latte",
        category: "Coffe",
        image: [cf6],
        price: 45000,
        description: "Cà phê sữa đậm phong cách Ý với cốc sữa lớn và được pha bằng sữa bò tươi 100% nguyên chất."
    },
    {
        _id: "pr7",
        name: "Bạc Xỉu Lắc Sữa Yến Mạch",
        category: "Coffe",
        image: [cf7],
        price: 45000,
        description: "Ngày thêm rộn ràng với Bạc Xỉu Lắc Sữa Yến Mạch. Cà phê phin Robusta đượm hương “lắc tới bến” cùng sữa yến mạch sánh mịn và đá đập mát lạnh. Lắc trước rồi hớp, hớp trực tiếp từ nắp lại càng ngon. *Để giữ trọn vị, Bạc Xỉu Lắc luôn được phục vụ kèm đá với định lượng đá không đổi."
    },
    {
        _id: "pr8",
        name: "Frosty Phin Gato",
        category: "Frosty",
        image: [cf8],
        price: 55000,
        description: "Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng"
    },
    {
        _id: "pr9",
        name: "Frosty Cà Phê Đường Đen",
        category: "Frosty",
        image: [cf9],
        price: 59000,
        description: "Đá Xay Frosty Cà Phê Đường Đen mát lạnh, sảng khoái ngay từ ngụm đầu tiên nhờ sự kết hợp vượt chuẩn vị quen giữa Espresso đậm đà và Đường Đen ngọt thơm. Đặc biệt, whipping cream beo béo cùng thạch cà phê giòn dai, đậm vị nhân đôi sự hấp dẫn, khơi bừng sự hứng khởi trong tích tắc."
    },
    {
        _id: "pr10",
        name: "Frosty Bánh Kem Dâu",
        category: "Frosty",
        image: [cf10],
        price: 59000,
        description: "Bồng bềnh như một đám mây, Đá Xay Frosty Bánh Kem Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng"
    },
    {
        _id: "pr11",
        name: "Frosty Choco Chip",
        category: "Frosty",
        image: [cf11],
        price: 59000,
        description: "Đá Xay Frosty Choco Chip, thử là đã! Lớp whipping cream bồng bềnh, beo béo lại có thêm bột sô cô la và sô cô la chip trên cùng. Gấp đôi vị ngon với sô cô la thật xay với đá sánh mịn, đậm đà đến tận ngụm cuối cùng."
    },
    {
        _id: "pr12",
        name: "Frosty Phin Gato",
        category: "Frosty",
        image: [cf12],
        price: 55000,
        description: "Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng"
    },
    {
        _id: "pr13",
        name: "Cocktail Bacardi",
        category: "Coctail",
        image: [ct1],
        price: 140000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr14",
        name: "Cocktail Bloody Mary",
        category: "Coctail",
        image: [ct2],
        price: 160000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr15",
        name: "Cocktail Mojito",
        category: "Coctail",
        image: [ct3],
        price: 120000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr16",
        name: "VectorStock Tequila sunrise",
        category: "Coctail",
        image: [ct4],
        price: 160000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr17",
        name: "Cocktail Bacardi",
        category: "Coctail",
        image: [cf12],
        price: 45000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr18",
        name: "Cocktail Bacardi",
        category: "Coctail",
        image: [cf12],
        price: 45000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr19",
        name: "Cocktail Bacardi",
        category: "Coctail",
        image: [cf12],
        price: 45000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
    {
        _id: "pr20",
        name: "Cocktail Bacardi",
        category: "Coctail",
        image: [cf12],
        price: 45000,
        description: "40ml Dark Rum, 40ml Malibu, 20ml of Lime juice,40ml of Coconut milk,Half of Pinapple,Blender to mix everything up"
    },
]