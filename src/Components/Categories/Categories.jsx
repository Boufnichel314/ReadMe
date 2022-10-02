import React from 'react'
import './categories.css'
import Dostoevsky from './Dostoevsky/Dostoevsky'
import dost from '../Categories/Dostoevsky/images/dostoevsky/dostoevsky_photo.jpg'
import Agatha from '../Categories/Dostoevsky/images/Agatha/Agatha_Christie.png'
import Goerge from './Dostoevsky/images/George Orwell/Goerge.jpg'
import Jules from './Dostoevsky/images/jules verne/Jules.jpg'
import Coelho from './Dostoevsky/images/paulo coelho/Coelho.jpg.jpg'
import Self from './Dostoevsky/images/self-development/self.jpg'
/////////////////////////////////
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
//////////////////////////////////
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
////////////////////////////////////
import Cinq from './Dostoevsky/images/jules verne/Cinq Semaines En Ballon.jpg'
import Terre from './Dostoevsky/images/jules verne/De la Terre à la Lune.jpg'
import Lune from './Dostoevsky/images/jules verne/Autour de la Lune.jpg'
import Enfants from './Dostoevsky/images/jules verne/Les Enfants du capitaine Grant.jpg'
import captaine from './Dostoevsky/images/jules verne/Un capitaine de quinze ans.jpg'
import Michel from './Dostoevsky/images/jules verne//Michel Strogoff.jfif'
import Ile from './Dostoevsky/images/jules verne/Ile.jpg'
import Vingt from './Dostoevsky/images/jules verne/Vingt Mille Lieues sous les mers.jpg'
import Voyage from './Dostoevsky/images/jules verne/Voyage au centre de la Terre.jpg'
///////////////////////////////////////
import Brida from './Dostoevsky/images/paulo coelho/Brida.jpg'
import Alchimiste from './Dostoevsky/images/paulo coelho/alchimiste.jpg'
import Eleven from './Dostoevsky/images/paulo coelho/Eleven Minutes.jpg'
import Devil from './Dostoevsky/images/paulo coelho/The Devil and Miss Prym.jpg'
import Veronika from './Dostoevsky/images/paulo coelho/Veronika Decides to Die.jpg'
import Mourir from './Dostoevsky/images/paulo coelho/Veronika décide de mourir.jpg'
import River from './Dostoevsky/images/paulo coelho//By the River Piedra I Sat Down and Wept.jpg'
import فيرونيكا from './Dostoevsky/images/paulo coelho/فيرونيكا تقرر أن تموت.jpg'
import Bord from './Dostoevsky/images/paulo coelho/sur le bord de la rivière piedra.jpeg'
import Alchemist from './Dostoevsky/images/paulo coelho/The Alchemist.jpeg'
///////////////////////////////////////////////////////
import homme from './/Dostoevsky/images/self-development/homme.png'
import عادات from './/Dostoevsky/images/self-development/7 عادات للناس الأكثر فعالية.jpg'
import regles from './/Dostoevsky/images/self-development/12 règles pour une vie.jpg'
import hurt from './/Dostoevsky/images/self-development/hurt.jpg'
import comment from './/Dostoevsky/images/self-development/Comment se faire des amis.jpg'
import التفكير from './/Dostoevsky/images/self-development/قوة التفكير الايجابي.jpg'
import pouvoir from './/Dostoevsky/images/self-development/Le Pouvoir de la vulnérabilité.jpg'
import forward from './/Dostoevsky/images/self-development/Failing Forward.jpg'
import richest from './/Dostoevsky/images/self-development/The richest man in Babylon.jpg'
import اسرار from './/Dostoevsky/images/self-development/اسرار عقل المليونير.jpg'
import puissance from './/Dostoevsky/images/self-development/La puissance de la pensée positive.jpg'
import magic from './/Dostoevsky/images/self-development/Big Magic.jpg'
import الجبن from './/Dostoevsky/images/self-development/من حرك قطعة الجبن الخاصة بي؟.jpg'
import workweek from './/Dostoevsky/images/self-development/The 4-Hour Workweek.jpg'
import habitude from './/Dostoevsky/images/self-development/Le pouvoir des habitudes.jpg'
import الفستق from './/Dostoevsky/images/self-development/نظرية الفستق.jpg'
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
  const Jules_data = [
    {
      name: 'Cinq Semaines En Ballon',
      profile: Cinq
    },
    {
      name: 'De la Terre à la Lune',
      profile: Terre
    },
    {
      name: 'Autour de la Lune',
      profile: Lune
    },
    {
      name: 'Les Enfants du capitaine Grant',
      profile: Enfants
    },
    {
      name: 'Un capitaine de quinze ans',
      profile: captaine
    },
    {
      name: 'Michel Strogoff',
      profile: Michel
    },
    {
      name: 'Ile',
      profile: Ile
    },
    {
      name: 'Vingt Mille Lieues sous les mers',
      profile: Vingt
    },
    {
      name: 'Voyage au centre de la Terre',
      profile: Voyage
    },







  ]
  const Paulo_data = [
    {
      name: 'Veronika Decides to Die',
      profile: Veronika
    },
    {
      name: 'By the River Piedra I Sat Down and Wept',
      profile: River
    },
    {
      name: 'The Devil and Miss Prym',
      profile: Devil
    },
    {
      name: 'Eleven Minutes',
      profile: Eleven
    },
    {
      name: 'Brida',
      profile: Brida
    },
    {
      name: 'فيرونيكا تقرر أن تموت.',
      profile: فيرونيكا
    },
    {
      name: 'The Alchemist',
      profile: Alchemist
    },
    {
      name: 'sur le bord de la rivière piedra',
      profile: Bord
    },
    {
      name: 'Alchimiste',
      profile: Alchimiste
    },
    {
      name: 'Veronika décide de mourir',
      profile: Mourir
    },
  ]
  const Self_data = [
    {
      name : 'عادات للناس الأكثر فعالية.',
      profile : homme
    },
    {
      name : 'Homme',
      profile : عادات
    },
    {
      name : '12 règles pour une vie',
      profile : regles
    },
    {
      name : 'Hurt',
      profile : hurt
    },
    {
      name : 'Comment se faire des amis',
      profile : comment
    },
    {
      name : 'قوة التفكير الايجابي.',
      profile : التفكير
    },
    {
      name : 'Le Pouvoir de la vulnérabilité',
      profile : pouvoir
    },
    {
      name : 'Failing Forward',
      profile : forward
    },
    {
      name : 'The richest man in Babylon',
      profile : richest
    },
    {
      name : 'اسرار عقل المليونير.',
      profile : اسرار
    },
    {
      name : 'La puissance de la pensée positive',
      profile : puissance
    },
    {
      name : 'Big Magic',
      profile : magic
    },
    {
      name : 'من حرك قطعة الجبن الخاصة بي؟.',
      profile : الجبن
    },
    {
      name : 'The 4-Hour Workweek',
      profile : workweek
    },
    {
      name : 'Le pouvoir des habitudes',
      profile : habitude
    },
    {
      name : 'نظرية الفستق.',
      profile : الفستق
    },]
  return (
    <div className='categories'>
        <Dostoevsky profile = {dost} Author = 'Fyodor Dostoevsky' data = {Dostoevsky_data}/>
        <Dostoevsky profile = {Agatha} Author = 'Agatha Christie' data= {Agatha_data} />
        <Dostoevsky profile = {Goerge} Author = 'Goerge Orwell' data= {George_data} />
        <Dostoevsky profile = {Jules} Author = 'Jules Verne' data= {Jules_data} />
        <Dostoevsky profile = {Coelho} Author = 'Paulo Coelho' data= {Paulo_data} />
        <Dostoevsky profile = {Self} Author = 'Self Development' data= {Self_data} />
    </div>
  )
}
