import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money 1',
    text: ' ipsum dolor sit dipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money 2',
    text: 'Lorem ipsum dolor sit amet cperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2029',
    title: 'humm',
    info: 'Ltatum maxime reprehenderit eum quod exercitationem fugit, qi corporis.',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'jan 26th, 2024',
    title: 'Tibet crap',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: 6,
    cost: 5100,
  },
  {
    id: 3,
    image: tour3,
    date: 'june 26th, 2025',
    title: 'yes dude',
    info: 'Lorem ipsum dolor sit amet, consecteis.',
    location: 'China',
    duration: 6,
    cost: 2600,
  },
]
