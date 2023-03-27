import React from 'react'

interface props{
    label: string,
    clickHere: any;
    styles: React.CSSProperties;
}
const Button: React.FC<props> = ({label, clickHere, styles}) =>{
  return (
    <button onClick={clickHere} style={styles}>{label}</button>
  )
}

export default Button