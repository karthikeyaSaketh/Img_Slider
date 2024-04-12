
import { useState ,useEffect } from 'react'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'
import './styles.css'


export default function ImgSlider(){
    const len=5;
    const [num,setNum] = useState(0);
    const data=['https://static.cricketaddictor.com/images/team/logo/rajasthan-royals.jpg?q=80','https://www.nsbpictures.com/wp-content/uploads/2019/03/chennai_super_kings_logo_freelogovectors.net_-1024x844.png','https://www.nsbpictures.com/wp-content/uploads/2019/03/Mumbai_Indians_Logo.png','http://2.bp.blogspot.com/-Yex33W6dCiw/VRFS0rCT6kI/AAAAAAAAAho/q2-m09PGuqI/s1600/kkr1.jpg','https://wallpapercave.com/wp/wp8998809.jpg']
    
    useEffect(() => {
        // Function to change the image every 2 seconds
        const intervalId = setInterval(() => {
          setNum(prevIndex => (prevIndex + 1) % data.length);
        }, 5000);
    
        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [data.length]);

    return <div className="container">
        <BsArrowLeftCircleFill className='arrow arrow-left'
             onClick={()=>num===0 ? setNum(len-1) : setNum(num-1)} />
        {
            data && data.length ?
                data.map((dataItem,index)=>(
                    <img
                    key={index}
                    src={dataItem}
                    alt={index}
                    className={index===num ? 'cur' : 'cur hid'}/>
                )):null
        }
        <BsArrowRightCircleFill className='arrow arrow-right'
             onClick={()=>num===len-1 ? setNum(0) : setNum(num+1)}/>
        <span className='circle-con'>
            {
                data && data.length ?
                data.map((dataItem,index)=>(
                    <button
                    className={index===num ? 'cur-slide' : 'cur-slide hid-slide'}
                     onClick={()=>setNum(index)}/>
                )):null
            }
        </span>
        
    </div>
}