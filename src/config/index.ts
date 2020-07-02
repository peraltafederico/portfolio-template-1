import project1 from '../assets/images/nature-1.jpg'
import project2 from '../assets/images/nature-2.jpg'
import project3 from '../assets/images/nature-3.jpg'
import project4 from '../assets/images/nature-4.jpg'
import project5 from '../assets/images/nature-5.jpg'
import project6 from '../assets/images/nature-6.jpg'
import project7 from '../assets/images/nature-7.jpg'

export const navBarItems = ['PORTFOLIO', 'SOBRE MI', 'CONTACTO']
export const professional = {
  name: 'The Professional',
  job:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
}
export const projects = [
  {
    img: project1,
    title: 'Lorem Impsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    img: project2,
    title: 'Projecto 2',
    description: 'Description 2',
  },
  {
    img: project5,
    title: 'Projecto 3',
    description: 'Description 3',
  },
  {
    img: project7,
    title: 'Projecto 4',
    description: 'Description 4',
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
