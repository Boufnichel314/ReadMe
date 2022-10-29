import {lazy, Suspense} from 'react';
import './categories.css'
import { pure } from 'recompose';
import dost from '../Categories/Dostoevsky/images/dostoevsky/dostoevsky_photo.jpg'
import Agatha from '../Categories/Dostoevsky/images/Agatha/Agatha_Christie.png'
import Goerge from './Dostoevsky/images/George Orwell/Goerge.jpg'
import Coelho from './Dostoevsky/images/paulo coelho/Coelho.jpg.jpg'
import Self from './Dostoevsky/images/self-development/self.jpg'
import {Self_data} from './/Dostoevsky/Cat1_data.js'
import {Dostoevsky_data} from './/Dostoevsky/Cat2_data.js'
import {Agatha_data} from './/Dostoevsky/Cat3_data.js'
import {George_data} from './/Dostoevsky/Cat4_data.js'
import {Paulo_data} from './/Dostoevsky/Cat6_data.js'
const Categories = () => {
  const Dostoevsky = lazy(() => import('./Dostoevsky/Dostoevsky'))
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='categories'>
        <Dostoevsky profile = {dost} Author = 'Fyodor Dostoevsky' data = {Dostoevsky_data}/>
        <Dostoevsky profile = {Agatha} Author = 'Agatha Christie' data= {Agatha_data} />
         <Dostoevsky profile = {Goerge} Author = 'Goerge Orwell' data= {George_data} />
        <Dostoevsky profile = {Coelho} Author = 'Paulo Coelho' data= {Paulo_data} />
        <Dostoevsky profile = {Self} Author = 'Self Development' data= {Self_data} />
    </div>
    </Suspense>
  )
}
export default pure(Categories);