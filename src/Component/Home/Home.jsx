import React, { useEffect } from "react";
import coverImg from "../../assets/new/cover_3.jpg";


import f_1 from "../../assets/traning/1.webp";
import f_2 from "../../assets/traning/2.jpg";
import f_3 from "../../assets/traning/3.jpg";
import f_4 from "../../assets/traning/4.jpg";
import f_5 from "../../assets/traning/5.jpg";
import f_6 from "../../assets/traning/6.jpeg";

import f_7 from "../../assets/traning/7.jpg";
import f_8 from "../../assets/traning/8.png";
import f_9 from "../../assets/traning/9.jpg";
import f_10 from "../../assets/traning/10.jpg";
import f_11 from "../../assets/traning/11.jpg";
import f_12 from "../../assets/traning/12.png";
import f_13 from "../../assets/traning/6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import { Menu, Dialog, Disclosure, Transition } from "@headlessui/react";

// icons
import {
  MdOutlineSecurity,
  MdOutlineSecurityUpdateGood,
  MdDeveloperMode,
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLogoElectron } from "react-icons/io5";
import { SiElectronbuilder } from "react-icons/si";
import { GiChemicalDrop } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { SiCyberdefenders } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiBorderRadius, BiSolidPencil } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

export default function Home() {

 

 
  const features = [
    { title: "برانامج أمن المعلومات", icon: <MdOutlineSecurity />, lang: "ar" },
    { title: "البيئة الافتراضية", icon: <FaHouseChimney />, lang: "ar" },
    { title: "تقنية المعلومات", icon: "" },
    {
      title: "أمن المعلومات",
      icon: <MdOutlineSecurityUpdateGood />,
      lang: "ar",
    },
    {
      title: " التحقق في أمن المعلومات",
      icon: <SiCyberdefenders />,
      lang: "ar",
    },
    { title: "برنامج أمن الشبكات", icon: <GrSecure />, lang: "ar" },
    {
      title: "مزودو الخدمات",
      icon: <IoIosInformationCircleOutline />,
      lang: "ar",
    },
    { title: "هندسة كيماوية", icon: <GiChemicalDrop />, lang: "ar" },
    { title: "هندسة الليكترونية", icon: <IoLogoElectron />, lang: "ar" },
    { title: "data", icon: <SiElectronbuilder />, lang: "eng" },
    { title: "Developer", icon: <MdDeveloperMode />, lang: "eng" },
    { title: "SASS Human capital management ", icon: "", lang: "eng" },
  ];

  const traning = [
    {
      title: "التطوير التنظيمى",
      sub: [
        "الهيكلة والتصميم ",
        "االتفاعلات الإنسانية",
        "الموارد البشرية",
        "التغير الإستراتيجى",
        "القيادة",
      ],
      src: f_12,
    },
    {
      title: "إدارة الثروة و الاستثمار",
      sub: [
        "التأمين",
        "البنوك",
        "المصارف الإسلامية",
        "الأصول والإستثمار",
        "سوق المال",
      ],
      src: f_13,
    },
    {
      title: "التطوير الشخصى",
      sub: ["إدارة الذات", "التواصل و التأثير", "مناهج التفكير", "القيادة"],
      src: f_8,
    },
    {
      title: "تطوير الأداء التشغيلى",
      sub: [
        "إدارة عمليات الصيانة",
        "إدارة الأصول والمنشآت",
        "إدارة العمليات والمشروعات",
        "الصحة والأمن والسلامة",
        "الجودة والامتثال",
      ],
      src: f_9,
    },
    {
      title: " إدارة المشتريات وسلاسل المشتريات",
      sub: [
        "التسويق",
        "المبيعات",
        "العلاقات والسمعة والعلامة",
        "تجربة العميل",
        "الصورة الذهنية وإدارة السمعه",
        "العلاقات العامة",
      ],
      src: f_10,
    },
    {
      title: "الإتصال التجارى",
      sub: [
        "التسويق",
        "المبيعات",
        "العلاقات والسمعة والعلامة",
        "تجربة العميل",
        "العلاقات العامة",
        "خدمة العملاء",
        "الصورة الذهنية وإدارة السمعة",
      ],
      src: f_11,
    },
  ];

  const FQA = [
    {
      title: "التطوير الإداري",
      sub: [
        "الإدارة و الإستراتيجية",
        "القطاع العام والإدارة الحكومية",
        "المنظمات الغير هادفة للربح",
        "المخاطر و الأزمات",
        "الجودة والامتثال",
      ],
    },
    {
      title: "إدارة الرعــاية الطــبية",
      sub: [
        "القيادة والاستراتيجية",
        "الإدارة والتشغيل",
        " الرعاية الطبية",
        "الجودة والامتثال",
      ],
    },
    {
      title: "إدارة   الخدمات التعليمية",
      sub: [
        "تطوير هيئة التدريس",
        " منهجيات التعليم ونقل المعرفة",
        "الجودة والامتثال",
        " التعليم الأكاديمي",
        "الجودة في الخدمات التعليمية",
      ],
    },
    {
      title: "الجودة والتميز المؤسسي",
      sub: [" االجودة ", " الجودة والامتثال "],
    },
    {
      title: "الهندسة",
      sub: [
        "الهندسة - المعمارية والمدنية والإدارة",
        " الهندسة - الهندسة الكيميائية",
        " الهندسة - الكهربائية والأجهزة",
        " الهندسة - الميكانيكية وعلوم الصيانة",
        " الهندسة - الطاقة والبترول والنفط والغاز",
      ],
    },
    {
      title: "إدارة   المكاتب و البيانات",
      sub: [" إدارة المكاتب", " إدارة الوثائق و البيانات"],
    },
    {
      title: "الأمن والسلامة و الصحة المهنية",
      sub: [" الأمن", "الصحة و السلامة"],
    },
  ];

  const contact = [
    { title: "واتساب", icon: <FaWhatsapp />, data: "أضعط للمحاثة" },
    { title: "اطلب الخدمة", icon: <BiSolidPencil />, data: "أضغط للتسجيل" },
    {
      title: "البريد الالكتروني",
      icon: <IoMailOutline />,
      data: "marketing@ivorytraining.com",
    },
  ];

  const cover = {
    backgroundImage: `url(${coverImg})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
  };
  return (
    <section>
      {/* 1st */}

      <section className="bg-[var(--fait-color)]  py-5">
        <div className="rounded-xl  relative wrapper !p-0">
          {/* overlay */}
          <div className="bg-[#00000015] absolute inset-0 rounded-xl"></div>

          <div style={cover} className="p-10 sm:p-20 ">
            {/* content */}
            <div className="   ">
              <div className="w-[90%] lg:w-[60%] m-auto center flex-col ">
                <h1 className="head">التدريب</h1>
                <div className="">
                  
                  <p className=" para  ">
                    فـي عصـرِ النهضـة التكنولوجيـة تقـدم آيفورى حقيبـة تدريبيـة
                    ذات موضوعـات تفاعلية ومؤثـرة، تـم إعدادهـا على نحِو
                    إسـتراتيجي لتلائم طبيعـة التحديـات التـي يواجههـا العالـم
                    فـي الفتـرة الحاليـة. نهـدف مـن تلـك الموضوعـات التدريبيـة
                    سـد الفجـوة ومعالجـة نقــاط الضعــف لــدى الأفــراد والعمــل
                    علــى تنميــة مواهبهــم وتوســيع مداركهــم وتعزيــز
                    مهاراتهــم بشــكل ملائم لســوق العمــل.
                  </p>
                  <p className="para ">
                    عـلاوة علـى تحسـين أداء المؤسسـات والشـركات بهـدف الوصـول
                    بهـم نحـو أعلـى معـدلات النمـو والإزدهـار. ويندرج تحت كل
                    موضوع تدريبي عدة برامج مختصة بالتدريب والتأهيل والتوجية
                    بالإضافة إلى البرامج الإستشارية.
                  </p>
                </div>

                {/* btns */}
                <div className="flex items-center gap-3  w-[60%] mx-auto   text-[8px] sm:text-xs lg:text-sm font-bold mt-2 lg:mt-10 ">
                  <button type="button" className="btn_hover ">
                    <div className=""></div>
                    الخطة التدريبية
                  </button>
                  <button type="button" className=" btn_hover ">
                    <div></div>
                    الأعتمادات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className=" text-end">
        <div className=" wrapper">
          <div className="text-center w-[80%] mx-auto">
            <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
              تقنية المعلومات والتحول الرقمي
            </h2>
            <p className="text-[var(--main-color)] font-semibold  text-xs">
              في عصرنا الحالي، أصبحت تقنية المعلومات والتحول الرقمي من الركائز
              الأساسية التي تقود التطور في جميع المجالات. تعتمد تقنية المعلومات
              على استخدام الحواسيب والبرمجيات والشبكات لتخزين البيانات ومعالجتها
              ونقلها، بينما يشير التحول الرقمي إلى عملية استخدام هذه التقنيات
              لإعادة تصميم العمليات والخدمات لتصبح أكثر كفاءة وسرعة ومرونة.
            </p>
          </div>
          <div className="my-10">
            {/* slidesPerView={2} */}
            <Swiper
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {features.map((el) => {
                return (
                  <SwiperSlide key={el.title}>
                    <div
                      className={`
                      ${el.lang == "eng" ? "flex-row-reverse" : ""}
                      text-[var(--main-color)] text-xs font-bold flex items-center gap-2 `}
                    >
                      <span className="text-nowrap">{el.title}</span>
                      <span className="text-lg inline-block">{el.icon}</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* 3rd */}

      <section className=" text-end bg-[var(--faint-color)]">
        <div className=" wrapper w-full sm::w-[80%] mx-auto">
          {/* header */}
          <div className="text-center ">
            <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
              التطوير الشخصي
            </h2>
            <p className="text-[var(--main-color)] font-semibold  text-xs">
              التطوير الشخصي هو عملية مستمرة تهدف إلى تعزيز قدرات الفرد وتحسين
              مهاراته لتحقيق النجاح على المستوى الشخصي والمهني
            </p>
          </div>
          {/* details */}
          <div className="   w-full  mt-5 ">
            {traning.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className={`
                     grid grid-cols-1 md:grid-cols-12
                 gap-1 xl:gap-5 py-0  sm:py-3  `}
                >
                  {/* image */}
                  <div
                    className={`
                ${idx % 2 == 0 ? "order-1" : "order-1 md:order-3"}

                    col-span-1  md:col-span-5 w-full
                       `}
                  >
                    <div
                      className="w-[300px] mx-auto bg-[var(--main-color)] rounded-md pt-2 relative
                      overflow-hidden
                      parent_overLay
                    
                    "
                    >
                      <div className="absolute  bg-[#fce8ed2e] duration-300 ease-in-out bottom-[-400px]  w-[300px] aspect-square over_lay"></div>

                      <img
                        src={el.src}
                        alt={el.title}
                        className="w-[95%] mx-auto rounded-tr-md rounded-tl-md  max-h-[200px] min-h-[200px]"
                      />
                    </div>
                  </div>
                  {/* between */}
                  <div
                    className={`
                order-2
                    line_through
                    col-span-2`}
                  >
                    <span>{idx + 1}</span>
                  </div>
                  {/* text */}
                  <div
                    className={`
                ${idx % 2 == 0 ? "order-3" : "order-3 md:order-1"}
center
                    col-span-1 md:col-span-5
                    text-[var(--main-color)] text-md  `}
                  >
                    <div
                      className={`

                     mx-auto
                        `}
                    >
                      <h4 className=" text-sm md:text-base font-bold mb-2">
                        {el.title}
                      </h4>
                      <div data-aos={`${idx%2 ==0 ?'fade-left':'fade-right'}`}>
                        <ul className="">
                          {el.sub.map((_sub, i) => {
                            return (
                              <li key={i} className="text-md mb-1 text-xs ">
                                <div className="flex items-center justify-end ">
                                  {_sub}
                                  <BsDot />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4th */}
      <section className="">
        <div className="wrapper grid grid-cols-1 sm:grid-cols-12">
          {/* data */}
          <div className="col-span-1 sm:col-span-8">
            {FQA.map((el) => {
              return (
                <div key={el.title} className="">
                  <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 ">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div data-aos="flip-up">
                            <Disclosure.Button className="flex w-full justify-between items-end  gap-2 rounded-lg bg-[var(--faint-color)] px-4 py-2 text-start text-sm font-medium text-[var(--main-color)]  focus:outline-none focus-visible:ring-0 cursor-pointer">
                              {open ? (
                                <MdKeyboardArrowDown />
                              ) : (
                                <MdKeyboardArrowLeft />
                              )}
                              <span>{el.title}</span>
                            </Disclosure.Button>
                          </div>

                          {el.sub.map((_sub) => {
                            return (
                              <Disclosure.Panel
                                key={_sub}
                                className="px-4 my-1 text-xs text-[var(--main-color)] flex items-center gap-1 justify-end"
                              >
                                {_sub}
                                <MdOutlineKeyboardDoubleArrowLeft />
                              </Disclosure.Panel>
                            );
                          })}
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              );
            })}
          </div>
          {/* header */}
          <div className="text-end col-span-1 sm:col-span-4 ">
            <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
              مجالات التدريب والتطوير
            </h2>
            <p className="text-[var(--main-color)] font-semibold  text-xs">
              يُعد التدريب والتطوير من الركائز الأساسية لنجاح أي مؤسسة أو فرد،
              حيث يساهم في تعزيز المهارات وزيادة الكفاءة وتحقيق الأهداف بكفاءة
              أعلى. تتعدد مجالات التدريب والتطوير لتشمل:
            </p>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="bg-[var(--faint-color)]">
        <div className="wrapper grid grid-cols-1 sm:grid-cols-12 ">
          {/* data */}
          <div className="col-span-1 sm:col-span-6 grid grid-cols-4 gap-4  ">
            {contact.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-2 text-end border-[1px] border-[var(--main-color)] text-[var(--main-color)] rounded-lg p-3 flex items-start justify-end text-sm gap-2 hover:scale-105 duration-300 ease-in-out"
                >
                  <div className="text-xs flex items-end justify-center  flex-col gap-2">
                    <h6 className=" font-bold flex items-center justify-center flex-row-reverse gap-1">
                      <span className="font-bold text-base">{el.icon}</span>
                      <span>{el.title}</span>
                    </h6>
                    {idx == 2 && (
                      <a
                        href={`mailto:${el.data}`}
                        className="text-[10px] lg:text-xs"
                      >
                        {el.data}
                      </a>
                    )}

                    {idx == 0 && (
                      <a
                        className="btn text-[10px] px-3"
                        href="https://api.whatsapp.com/send/?phone=966537078019&text&type=phone_number&app_absent=0"
                      >
                        {el.data}
                      </a>
                    )}
                    {idx == 1 && (
                      <button type="button" className="btn text-[10px] px-3">
                        {el.data}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* header */}
          <div className="text-end col-span-1 sm:col-span-6 ">
            <div className="w-[80%] mx-auto">
              <h2 className="text-[var(--main-color)] font-semibold text-lg mb-3">
                تواصل مع مستشارينا فى التدريب لخدمتك
              </h2>
              <p className="text-[var(--main-color)] font-semibold  text-xs">
                يُعد التدريب والتطوير من الركائز الأساسية لنجاح أي مؤسسة أو فرد،
                حيث يساهم في تعزيز المهارات وزيادة الكفاءة وتحقيق الأهداف بكفاءة
                أعلى. تتعدد مجالات التدريب والتطوير لتشمل:
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
