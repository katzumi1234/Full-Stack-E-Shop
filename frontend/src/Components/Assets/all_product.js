import p1_img from './p1_img.jpg'
import p2_img from './p2_img.jpg'
import p3_img from './p3_img.jpg'
import p4_img from './p4_img.jpg'
import p6_img from './pc1.png'
import p7_img from './pc2.png'
import p8_img from './pc3.png'
import p9_img from './pc4.png'
import p10_img from './pc5.png'
import p11_img from './p1.png'
import p12_img from './p2.png'
import p13_img from './p3.png'
import p14_img from './p4.png'
import p15_img from './p5.png'
import p16_img from './p6.png'
import p17_img from './p7.png'
import p18_img from './p8.png'
import p19_img from './p9.png'
import p20_img from './p10.png'

let all_product = [
  {
    id: 1,
    name:"Laptop Apple MacBook Air 13-inch, True Tone, procesor Apple M1 , 8 nuclee CPU si 7 nuclee GPU, 8GB, 256GB, Space Grey, INT KB",
    category: "laptops",
    image: p1_img,
    new_price: 4499,
    old_price: 5899,
  },

  {id:2,
    name:"Laptop 14 cu procesor Intel® Celeron® J4105, Windows 11, 6GB RAM, 120GB SSD, 1920*1080 Full HD, Intel® UHD Graphics 600, Argintiu",
    category: "laptops",
    image:p2_img,
    new_price: 958,
    old_price:1499,
  },
  {id:3,
    name:"Laptop HP 250 G10 cu procesor Intel® Core™ i5-1335U pana la 4.60 GHz, 15.6, Full HD, 8GB, 512GB SSD, Intel® Iris® Xe Graphics, Windows 11 Pro, Dark Ash Silver",
    category: "laptops",
    image:p3_img,
    new_price: 2499,
    old_price: 2999,
  },
  {id:4,
    name:"Laptop Dell Ultrabook XPS 9730, 17, UHD+ Touch Display, cu Procesor Intel Core i7-13700H, 64GB Ram, 2TB SSD, NVIDIA GeForce RTX 4070, Windows 11 Pro, Platinum Silver",
    category: "laptops",
    image:p4_img,
    new_price: 31527,
    old_price: 33596,
  },
  {
    id: 6,
    name: "Sistem Desktop PC Serioux Powered by ASUS cu procesor AMD Ryzen™ 5 2400G pana la 3.9 GHz, 16GB DDR4, 512GB SSD M.2, PULSE AMD Radeon™ RX 6600 8GB GDDR6, No OS, Black",
    category: "PC",
    image: p6_img,
    new_price: 3199,
    old_price: 3599,
  },
  {
    id: 7,
    name: "Sistem PC Gaming powered by 1stPlayer® cu Intel® Core™ i7 12700F Alder Lake 4, 9 GHz, 32GB DDR5, SSD 1 TB M.2, GeForce® RTX™ 4060Ti 8 GB GDDR6",
    category: "PC",
    image: p7_img,
    new_price: 7895,
    old_price: 8795,
  },
  {
    id: 8,
    name: "Sistem Desktop PC ASUS D500MD-CZ-3121000080 cu procesor Intel® Core™ i3-12100 pana la 4.30GHz, 8GB DDR4, 512GB SSD, Intel® UHD Graphics 730, No OS, Black",
    category: "PC",
    image: p8_img,
    new_price: 1799,
    old_price: 2399,
  },
  {
    id: 9,
    name: "Desktop PC Intel Dual Core G1820 2.7 Ghz, 4 GB DDR3, SSD 128 GB, SURSA 450W",
    category: "PC",
    image: p9_img,
    new_price: 479,
    old_price: 999,
  },
  {
    id: 10,
    name: "Desktop PC Tornado CTX0021, Intel® Core™ Processor I3 - 3.10GHz, 8GB DDR3, 120SSD, DVD-RW",
    category: "PC",
    image: p10_img,
    new_price: 1082,
    old_price: 1861,
  },
  {
    id: 11,
    name: "Mouse gaming wireless Fbirddek® A9, 7 efecte de iluminare, receptor USB, 6 Butoane, Reglabil 1200/1600/2400 /3200DPI, 2.4GHZ, 400mAh, Mut, Iluminare RGB, Reincarcabil, Universale, Negru",
    category: "peripheral",
    image: p11_img,
    new_price: 49,
    old_price: 131,
  },
  {
    id: 12,
    name: "Mouse, Havit, MS753, Negru/Albastru",
    category: "peripheral",
    image: p12_img,
    new_price: 13,
    old_price: 35,
  },
  {
    id: 13,
    name: "Mouse pentru jocuri Mad Catz R.A.T. Pro X3 Negru",
    category: "peripheral",
    image: p13_img,
    new_price: 1142,
    old_price: 1323,
  },
  {
    id: 14,
    name: "Mouse gaming, DexXer, Wireless, Iluminare RGB, USB, Wireless 2.4 G, FastCharge, Design ergonomic, Negru",
    category: "peripheral",
    image: p14_img,
    new_price: 99,
    old_price: 179,
  },
  {
    id: 15,
    name: "Mouse Gaming Razer Basilisk V3 Chorma RGB",
    category: "peripheral",
    image: p15_img,
    new_price: 254,
    old_price: 276,
  },

  {
    id: 16,
    name: "Tastatura Serioux 9500i, Iluminata, USB, Negru",
    category: "peripheral",
    image: p16_img,
    new_price: 48,
    old_price: 53,
  },
  {
    id: 17,
    name: "Kit Gaming NYTRO TF-Wolf-200, 2 in 1 - Tastatura si Mouse, USB, Iluminare RGB, Negru",
    category: "peripheral",
    image: p17_img,
    new_price: 85,
    old_price: 129,
  },
  {
    id: 18,
    name: "Kit Gaming 4 in 1, KINSI, Tastatura, Mouse, Casti, Mousepad, RGB, Negru",
    category: "peripheral",
    image: p18_img,
    new_price: 169,
    old_price: 233,
  },
  {
    id: 19,
    name: "KIT gaming cu tastatura mecanica, mouse 3200DPI, casti si mousepad Lefy, USB cu fir, iluminare RGB",
    category: "peripheral",
    image: p19_img,
    new_price: 349,
    old_price: 425,
  },
  {
    id: 20,
    name: "Tastatura Mecanica Pentru Gaming, Functie De Lumini Pentru Sesiuni De Gaming Pe Timp De Noapte, Lumini Ambientale, Diferite Moduri De Lumini, Multiple Combinatii De Taste,, Calitate Premium",
    category: "peripheral",
    image: p20_img,
    new_price: 285,
    old_price: 334,
  },

 
];

export default all_product;
