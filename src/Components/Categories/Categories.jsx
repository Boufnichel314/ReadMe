import React from 'react'
import './categories.css'
import Dostoevsky from './Dostoevsky/Dostoevsky'
import dost from '../Categories/Dostoevsky/images/dostoevsky/dostoevsky_photo.jpg'
import Agatha from '../Categories/Dostoevsky/images/Agatha/Agatha_Christie.png'
import Goerge from './Dostoevsky/images/George Orwell/Goerge.jpg'
import Crime from './Dostoevsky/images/dostoevsky/crime and punishment.jpg'
import Brothers from './Dostoevsky/images/dostoevsky/the brothers karamazov.jpg'
import Idiot from './Dostoevsky/images/dostoevsky/Idiot.jpg'
import Les from './Dostoevsky/images/dostoevsky/les frères karamazov.jpeg'
import The from './Dostoevsky/images/dostoevsky/the gambler.jpg'
import LesD from './Dostoevsky/images/dostoevsky/Les Démons.jpg'
import الابله from './Dostoevsky/images/dostoevsky/الابله.jfif'
import الاخوة from './Dostoevsky/images/dostoevsky/الاخوة كرامازوف.jfif'
import leJoueur from './Dostoevsky/images/dostoevsky/Le Joueur.jpg'
///////////////////////
import death from './Dostoevsky/images/Agatha/death on the nile.jpg'
import maison from './Dostoevsky/images/Agatha/La Maison biscornue.jpg'
import جريمة from './Dostoevsky/images/Agatha/جريمة في شارع هيكوري دوك.jpg'
import اسطبلات from './Dostoevsky/images/Agatha/جريمة قتل في الإسطبلات.jpg'
import Express from './Dostoevsky/images/Agatha/Murder on the Orient Express.jfif'
import LeCrime from './Dostoevsky/images/Agatha/Le Crime.jpg'
import leMeurtre from './Dostoevsky/images/Agatha/Le Meurtre de Roger Ackroyd.jfif'
import Murder from './Dostoevsky/images/Agatha/The Murder of Roger Ackroyd.jpg'
import Mort from './Dostoevsky/images/Agatha/Mort sur le Nil.jpeg'
import Poirot from './Dostoevsky/images/Agatha/A.B.C. contre Poirot.jpg'
import Mystery from './Dostoevsky/images/Agatha/The Mystery of the Blue Train.jpg'
/////////////////////////
import مزرعة from './Dostoevsky/images/George Orwell/مزرعة الحيوان.jfif'
import Down from './Dostoevsky/images/George Orwell/down-and-out-in-paris-and-london.jpg'
import Deche from './Dostoevsky/images/George Orwell/Dans-la-deche-a-Paris-et-a-Londres.jpg'
import القس from './Dostoevsky/images/George Orwell/ابنة القس.jpg'
import animal from './Dostoevsky/images/George Orwell/animal-farm.png'
import mille from './Dostoevsky/images/George Orwell/1984-George_Orwell.jpg'
import ferme from './Dostoevsky/images/George Orwell/la ferme des animaux.jpg'
import الف from './Dostoevsky/images/George Orwell/ألف وتسعمائة وأربعةٌ وثمانون..jfif'
import hommage from './Dostoevsky/images/George Orwell/Hommage à la catalogne.jpg'
import keep from './Dostoevsky/images/George Orwell/keep-the-aspidistra-flying.jpg'
import homage from './Dostoevsky/images/George Orwell/homage-to-catalonia.jpg'
export default function Categories() {
  const Dostoevsky_data = [
    
      {
        name: 'Crime and Punishment',
        profile: Crime
      },
      {
        name: 'The Idiot',
        profile: الاخوة
      },
      {
        name: 'The Brothers Karamazov',
        profile: Les
      },
      {
        name: 'Le Joueur',
        profile: leJoueur
      } ,
      {
        name: 'Les Démons',
        profile: LesD
      },
      {
        name: 'الابله',
        profile: الابله
      },
      {
        name: 'الاخوة كرامازوف',
        profile: Brothers
      },
      {
        name: 'الجهل',
        profile: Idiot
      },
      {
        name: 'The Gambler',
        profile: The
      }
  ]
  const Agatha_data = [
    {
      name: 'Death on the Nile',
      profile: death
    },
    {
      name: 'La Maison biscornue',
      profile: maison
    },
    {
      name: 'جريمة في شارع هيكوري دوك',
      profile: جريمة
    },
    {
      name: 'جريمة قتل في الإسطبلات',
      profile: اسطبلات
    }, 
    {
      name: 'Murder on the Orient Express',
      profile: Express
    }, 
    {
      name: 'Le Crime',
      profile: LeCrime
    }, 
    {
      name: 'Le Meurtre de Roger Ackroyd',
      profile: leMeurtre
    }, 
    {
      name: 'The Murder of Roger Ackroyd',
      profile: Murder
    },
    {
      name: 'Mort sur le Nil',
      profile: Mort
    }, 
    {
      name: 'A.B.C. contre Poirot',
      profile: Poirot
    }, 
    {
      name: 'The Mystery of the Blue Train',
      profile: Mystery
    },
  ]
  const George_data = [
    {
      name: 'مزرعة الحيوان.',
      profile: مزرعة
    }, 
    {
      name: 'down-and-out-in-paris-and-london',
      profile: Down
    },
    {
      name: 'Dans-la-deche-a-Paris-et-a-Londres',
      profile: Deche
    }, 
    {
      name: 'ابنة القس.',
      profile: القس
    }, 
    {
      name: 'animal-farm',
      profile: animal
    },
    {
      name: '1984-George_Orwell',
      profile: mille
    }, 
    {
      name: 'la ferme des animaux',
      profile: ferme
    },
    {
      name: 'ألف وتسعمائة وأربعةٌ وثمانون',
      profile: الف
    }, 
    {
      name: 'Hommage à la catalogne',
      profile: hommage
    }, 
    {
      name: 'keep-the-aspidistra-flying',
      profile: keep
    },
    {
      name: 'homage-to-catalonia',
      profile: homage
    },
  ]

  return (
    <div className='categories'>
        <Dostoevsky profile = {dost} Author = 'Fyodor Dostoevsky' data = {Dostoevsky_data}/>
        <Dostoevsky profile = {Agatha} Author = 'Agatha Christie' data= {Agatha_data} />
        <Dostoevsky profile = {Goerge} Author = 'Goerge Orwell' data= {George_data} />
         {/*
        <Dostoevsky/>
        <Dostoevsky/>
        <Dostoevsky/> */}
    </div>
  )
}
