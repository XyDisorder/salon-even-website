import even2 from '../../assets/even/even2.svg';

export const EvenLogo = ({className}: {className: string} ) => {
  return (
      <img
          src={even2}
          alt="Even Logo"
          className={className}
          style={{ filter: 'invert(1)' }}
        />
  )
}