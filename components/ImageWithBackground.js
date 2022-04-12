import Image from 'next/image'

const ImageWithBackground = ({ alt, src, height = 200, width = 200 }) => {
  if (!alt) console.error(`A descriptive "alt" attribute is required for the image with src: ${src}`)
  return (
    <div className='flex justify-center bg-gray-100 rounded-lg p-4 drop-shadow-md'>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </div>
  )
}
export default ImageWithBackground
