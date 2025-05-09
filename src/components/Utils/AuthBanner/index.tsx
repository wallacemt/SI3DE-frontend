import  { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
//@ts-ignore
import "swiper/css";
import "swiper/swiper-bundle.css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/autoplay";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdWorkspacePremium } from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { BsSearch, BsSpeedometer } from "react-icons/bs";
export const AuthBanner = ({ position = "right", effect = "fade-up" }) => {
  const apresentationMessages = [
    {
      text: "Aqui você encontra as melhores oportunidades de trabalho e estágio para alunos da faculdade. Nossa plataforma foi criada para ajudar a conectar os alunos com empresas que buscam talentos.",
      icon: <BsSearch size={60} className="text-gray-400" />,
    },
    {
      text: "Nossa equipe trabalha arduamente para garantir que as oportunidades que publicamos sejam de qualidade e atendam às necessidades dos alunos.",
      icon: <SiWorkplace size={60} className="text-DarkP2" />,
    },
    {
      text: "A velocidade e a agilidade são fundamentais para os alunos. Nossa plataforma é projetada para ser rápida e eficiente, para que você possa encontrar oportunidades rapidamente.",
      icon: <BsSpeedometer size={60} className="text-amber-600" />,
    },
    {
      text: "Acesse nossa plataforma de qualquer lugar, em qualquer dispositivo. Nossa interface é responsiva e fácil de usar, para que você possa encontrar oportunidades em qualquer lugar.",
      icon: <MdWorkspacePremium size={60} className="text-amber-300" />,
    },
  ];

  const authImages = [
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744203123/student1_ailesj.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744203125/student2_s7piu8.png",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304829/woman-being-quarantined-home_sntnub.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304831/pexels-olly-3762800_lachax.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304833/pexels-fauxels-3184644_e2gbqe.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304834/pexels-tima-miroshnichenko-6550159_m5o7dy.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304835/pexels-fauxels-3184433_bvicut.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304838/pexels-george-pak-7972506_lzlc1o.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304845/pexels-yankrukov-8199555_yiwili.jpg",
    "https://res.cloudinary.com/dg9hqvlas/image/upload/v1744304862/portrait-smiling-girl-glasses-sitting-with-laptop-outdoor-cafe-drinking-coffee-working_mw7svc.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(authImages[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = authImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % authImages.length;
        return authImages[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`absolute w-full lg:max-w-[50%] h-full overflow-hidden hidden lg:block ${
        position == "left" ? "left-0" : "right-0"
      }`}
    >
      <div
        className={`h-full bg-cover bg-center relative`}
        style={{ backgroundImage: `url(${currentImage})`, transition: "all 1s ease-in-out" }}
        data-aos={effect}
      >
        <div className="absolute bottom-0 w-full bg-black/60 h-[45%] p-6 ">
          <div className="backdrop-blur-sm rounded-2xl bg-neutral10/20 p-2 ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                pauseOnMouseEnter: true,
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={2000}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mt-4 font-secundaria font-medium text-white text-2xl"
            >
              {apresentationMessages.map((message, index) => (
                <SwiperSlide key={index}>
                  <p className="px-0 py-4 text-lg text-center flex justify-between items-center flex-col">
                    <span className="mb-2">{message.icon}</span>
                    {message.text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
