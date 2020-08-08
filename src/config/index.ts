import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.jpg'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.jpg'
import project5 from '../assets/images/project-5.jpg'
import project7 from '../assets/images/project-7.jpg'
import { SectionsEnum } from '../enums'

export const navBarItems = [
  { name: 'ABOUT ME', scrollTo: SectionsEnum.BIOGRAPHY },
  { name: 'CAREER', scrollTo: SectionsEnum.CAREER },
  { name: 'PORTOFOLIO', scrollTo: SectionsEnum.PORTFOLIO },
  { name: 'CONTACT', scrollTo: SectionsEnum.CONTACT },
]
export const professional = {
  name: 'The Professional',
  job:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
}
export const photos = [
  {
    src: project1,
    width: 4,
    height: 2,
    title: 'Titulo 1',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    src: project2,
    width: 4,
    height: 3,
    title: 'Titulo 2',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    src: project3,
    width: 4,
    height: 3,
    title: 'Titulo 3',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    src: project4,
    width: 4,
    height: 3,
    title: 'Titulo 4',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },

  {
    src: project5,
    width: 4,
    height: 3,
    title: 'Titulo 5',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    src: project7,
    width: 4,
    height: 3,
    title: 'Titulo 6',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  // {
  //   src: project1,
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: project1,
  //   width: 4,
  //   height: 3,
  // },
  // {
  //   src: project1,
  //   width: 4,
  //   height: 3,
  // },
]
export const columns = [
  { title: 'CONTACTO', rows: ['+541150030859', 'tomas@gmail.com'] },
  { title: 'MIS REDES', rows: ['FB TW IG'] },
]

export const career = {
  firstColumn: {
    title: 'Educación',
    activities: [
      {
        date: 'March 2015 -  Jun 2018',
        title: 'School',
        subtitle: 'Lorem Impsum',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        date: 'March 2015 -  Jun 2018',
        title: 'College',
        subtitle: 'Lorem Impsum',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  },
  secondColumn: {
    title: 'Empleos',
    activities: [
      {
        date: 'March 2015 -  Jun 2018',
        title: 'Job 1',
        subtitle: 'Lorem Impsum',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        date: 'March 2015 -  Jun 2018',
        title: 'Job 2',
        subtitle: 'Lorem Impsum',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  },
}

export const behanceUrl = 'https://www.behance.net/tomasnbojorge'
