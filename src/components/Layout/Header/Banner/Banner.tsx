import './Banner.scss'

export interface IPropBanner {
  img: string
  textBanner: string
}
const Banner = (props: IPropBanner) => {
  const { img, textBanner } = props

  return (
    <div className='banner'>
      <div className='banner-children'>
        <img className='banner-children-img' src={img} alt='' />
        <div className='banner-children-spanBanner'>{textBanner}</div>
      </div>
    </div>
  )
}

export default Banner
