import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.jpg'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.jpg'
import project5 from '../assets/images/project-5.jpg'
import project6 from '../assets/images/project-6.jpg'
import project7 from '../assets/images/project-7.jpg'

export const navBarItems = ['PORTFOLIO', 'SOBRE MI', 'CONTACTO']
export const professional = {
  name: 'The Professional',
  job:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
}
export const photos = [
  {
    src: project1,
    width: 4,
    height: 3,
  },
  {
    src: project2,
    width: 1,
    height: 1,
  },
  {
    src: project3,
    width: 3,
    height: 4,
  },
  {
    src: project4,
    width: 3,
    height: 4,
  },
  {
    src: project5,
    width: 2,
    height: 1,
  },
  {
    src: project6,
    width: 3,
    height: 4,
  },
  {
    src: project7,
    width: 4,
    height: 3,
  },
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
