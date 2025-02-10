import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import slide1 from '../../public/image/slide1.jpg'
import slide2 from '../../public/image/slide2.jpg'
import slide3 from '../../public/image/slide3.jpg'
import slide4 from '../../public/image/slide4.jpg'
import { BsPlayCircleFill } from 'react-icons/bs'
export default function Carousel2({ cat }) {
  const slickDefaults = {
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: false,
    rtl: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  }
  return (
    <Slider {...slickDefaults}>
      <div>
        <div>
          <Image alt='slide1' src={slide1} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div className='mx-3'>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{ color: 'white', cursor: 'pointer' }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image alt='slide2' src={slide2} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div className='mx-3'>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{ color: 'white', cursor: 'pointer' }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image alt='slide3' src={slide3} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div className='mx-3'>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{ color: 'white', cursor: 'pointer' }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image alt='slide4' src={slide4} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div className='mx-3'>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{ color: 'white', cursor: 'pointer' }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
