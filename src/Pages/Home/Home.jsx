// import { Container } from '@mui/system'
import { useSelector } from 'react-redux'
import AnimatedPages from '../../Components/AnimatedPages'
import Categories from '../../Components/Categories/Categories'
import './home.css'
import Container from '@mui/material/Container'
export default function Home() {
const state = useSelector( state => state.userReducer.username )
const style = {
  display: 'flex',
}
if(state === 'Enter'){
  style.display = 'none'
}
else{
  style.display = 'flex'
}
  return (
    <AnimatedPages>
    <Container maxWidth = '80em' style = {{padding:'0', margin : '0'}}>
    <div className='Home_page'>
      <div className='Home_container'>
      <div className='Home_description'>
            <h1>ReadMe</h1>
            <p> <span> ريدمي </span>هي مكتبة لبيع كل الكتب بالعربية <br /> والفرنسية و الانجليزية <br /> و في جميع المدن المغربية</p>
          </div>
        <div className='Home_image'>
        <img src={require('../../images/lastdost2.png')}  alt="Dostoevsky"/>
        </div>
      </div>
    </div>
    </Container>
    {/* <div className="categories" style={style}>
    <Categories/>
    </div> */}
    </AnimatedPages>
  )
}


    