const GENDER = {
  female: { gender: 'Female', styles: 'text-pink-400 before:content-["♀"]' },
  male: { gender: 'Male', styles: 'text-sky-400 before:content-["♂"]' },
}

const SliderGenderIndicator = ({ gender = 'male' }) => {
  const { gender: title, styles } = GENDER[gender] ?? GENDER.male
  return (
    <span
      title={title}
      className={`${styles} absolute top-1 right-2 text-5xl font-mono`}
    >
    </span>
  )
}

export default SliderGenderIndicator
