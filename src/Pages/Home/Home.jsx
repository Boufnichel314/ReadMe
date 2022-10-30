import { useSelector } from 'react-redux'
import AnimatedPages from '../../Components/AnimatedPages'
import Categories from '../../Components/Categories/Categories'
import './home.css'
import dost from '../../images/lastdost2.png';
import Container from '@mui/material/Container'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Home() {
const state = useSelector( state => state.userReducer.username )
const style = {
  display: 'flex',
}
if(state) {
  style.display = 'none'
}
else{
  style.display = 'flex'
}
  return (
    <AnimatedPages>
    <Container maxWidth = '80em' style = {{padding:'0', margin : '0'}}>
    <div className='Home_page' style = {style}>
      <div className='Home_container'>
      <div className='Home_description'>
            <h1>ReadMe</h1>
            <p> <span> ريدمي </span>هي مكتبة لبيع كل الكتب بالعربية <br /> والفرنسية و الانجليزية <br /> و في جميع المدن المغربية</p>
          </div>
        <div className='Home_image'>
        <LazyLoadImage className='LazyLoadImage' src={dost}
                            width={'100%'} height={'100%'}
                            effect="blur"
                            alt="Image Alt"
                             />
        </div>
      </div>
    </div>
    <div className="categories" style={style}>
    <Categories className='categories'/>
    </div>
    </Container>
    </AnimatedPages>
  )
}