import { useState} from 'react';
const Translation = () => {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <label onClick={()=> setIsClicked(!isClicked)}
      style={{ fontSize: isClicked ? '100px' : '16px' }}
      >
        {isClicked ? '{कुकुरको छोरो} ; {मेरो डिक चुस्नुहोस्}' : 'DO NOT CLICK HERE'}
      </label>
    </div>
  )
}

export default Translation
