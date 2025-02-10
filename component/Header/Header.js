import { RiHome2Line } from 'react-icons/ri'
import { GoBrowser } from 'react-icons/go'
import { BiUser } from 'react-icons/bi'
import { TbPlaylist } from 'react-icons/tb'
import { FiPieChart, FiSearch } from 'react-icons/fi'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <div className='d-flex my-5' style={{ justifyContent: 'center' }}>
        <Link href={'/'}>
          <button
            className='headerBtn'
            style={{
              borderBottomLeftRadius: '0.5rem',
              borderTopLeftRadius: '0.5rem',
              margin: '0 1px 0 1px',
            }}
          >
            <RiHome2Line className='mx-2' />
            <span className='HeaderBtnTxt'>Home</span>
          </button>
        </Link>
        <Link href={'/browse/featured'}>
          <button className='headerBtn' style={{ margin: '0 1px 0 1px' }}>
            <GoBrowser className='mx-2' />
            <span className='HeaderBtnTxt'>Browse</span>
          </button>
        </Link>
        <Link href={'/artists'}>
          <button className='headerBtn' style={{ margin: '0 1px 0 1px' }}>
            <BiUser className='mx-2' />
            <span className='HeaderBtnTxt'>Artists</span>
          </button>
        </Link>
        <Link href={'/playLists'}>
          <button className='headerBtn' style={{ margin: '0 1px 0 1px' }}>
            <TbPlaylist className='mx-2' />
            <span className='HeaderBtnTxt'>PlayLists</span>
          </button>
        </Link>
        <Link href={'/charts/top-songs-week'}>
          <button className='headerBtn' style={{ margin: '0 1px 0 1px' }}>
            <FiPieChart className='mx-2' />
            <span className='HeaderBtnTxt'> Top Charts</span>
          </button>
        </Link>
        <button
          className='headerBtn'
          style={{
            borderBottomRightRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            margin: '0 1px 0 1px',
          }}
        >
          <FiSearch className='mx-2' />
          <span className='HeaderBtnTxt'>Search</span>
        </button>
      </div>
    </div>
  )
}
