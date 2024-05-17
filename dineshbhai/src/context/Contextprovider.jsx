import React, { useEffect, useState } from "react";
import Usercontext from "./usecontext";
import Products from "../component/Products";
import axios from 'axios';

function Contextprovider({ children }) {
  const [user, setuser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
async function getproduct()
{
  const res = await axios.get("http://localhost:8888/api/products");
 await setProducts(res.data)
  console.log(products)

}
getproduct();
  },[])

  
  const photos = [
    {
      id: "1",
      src: "/image/photo10.jpg",
      width: 4,
      height: 3,
      name: "Steel door",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000",
            offers:"RS 2346",
            lessoff:"10% off"
    },
    {
      id: "2",
      src: "/image/photo2.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "3",
      src: "/image/photos5.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "4",
      src: "/image/photos6.jpg",
      width: 4,
      height: 3,
      name: "Metal bed ",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "5",
      src: "https://th.bing.com/th/id/OIP.R2AKyBso6dGMgV9EfDWVygHaHW?rs=1&pid=ImgDetMain",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "6",
      src: "/image/photo11.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000",
            offers:"RS 2346",
            lessoff:"10% off"
    },
    {
      id: "7",
      src:"/image/IMG-20240510-WA0012.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000",
            offers:"RS 2346",
            lessoff:"10% off"
    },
    {
      id: "8",
      src: "/image/IMG-20240510-WA0013.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "9",
      src: "/image/IMG-20240510-WA0014.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
            color: "Black",
            dimensions: "80cm x 200cm",
            price: "RS 22,000",
            offers:"RS 2346",
            lessoff:"10% off"
    },
    {
      id: "10",
      src: "/image/IMG-20240510-WA0019.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "11",
      src: "/image/IMG-20240510-WA0020.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "12",
      src: "/image/IMG-20240510-WA0021.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "13",
      src:"/image/IMG-20240510-WA0022.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
    {
      id: "14",
      src:"/image/IMG-20240510-WA0023.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },    {
      id: "15",
      src:"/image/IMG-20240510-WA0024.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "16",
      src:"/image/IMG-20240510-WA0025.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "17",
      src:"/image/IMG-20240510-WA0026.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "18",
      src:"/image/IMG-20240510-WA0027.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "19",
      src:"/image/IMG-20240510-WA0029.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "20",
      src:"/image/IMG-20240510-WA0039.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "21",
      src:"/image/IMG-20240510-WA0040.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "22",
      src:"/image/IMG-20240510-WA0043.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "23",
      src:"/image/IMG-20240510-WA0044.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "24",
      src:"/image/IMG-20240510-WA0045.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "25",
      src:"/image/IMG-20240510-WA0046.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "26",
      src:"/image/IMG-20240510-WA0047.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "27",
      src:"/image/IMG-20240510-WA0049.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "28",
      src:"/image/IMG-20240510-WA0050.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "29",
      src:"/image/IMG-20240510-WA0052.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "30",
      src:"/image/IMG-20240510-WA0054.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "31",
      src:"/image/IMG-20240510-WA0055.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "32",
      src:"/image/IMG-20240510-WA0057.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "33",
      src:"/image/IMG-20240510-WA0058.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "34",
      src:"/image/IMG-20240510-WA0059.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "35",
      src:"/image/IMG-20240510-WA0062.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },  {
      id: "36",
      src:"/image/IMG-20240510-WA0065.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },{
      id: "37",
      src:"/image/IMG-20240510-WA0066.jpg",
      width: 4,
      height: 3,
      name: "Jewelry Software",
      p:"steel bed (queen bed)",
      description: "High-quality steel door suitable for both residential and commercial use.",
      color: "Black",
      dimensions: "80cm x 200cm",
      price: "RS 22,000",
      offers:"RS 2346",
      lessoff:"10% off"
    },
  ];

  const [show, setshow] = useState(false);
  const [img, setimg] = useState("");
  const [form, setform] = useState(false);
  const [showfrom, setshow2] = useState("");
  function imgshow(img){
    setimg(img);
    setshow(true);
  }
  function formshow(name) {
    setshow2(name);
    setform(true);
  }
  return (
    <Usercontext.Provider
      value={{
        user,
        setuser,
        photos,
        products,
        setshow,
        show,
        img,
        setimg,
        imgshow,
        setform,
        formshow,
        showfrom,
        form,
        setshow2,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
}

export default Contextprovider;
