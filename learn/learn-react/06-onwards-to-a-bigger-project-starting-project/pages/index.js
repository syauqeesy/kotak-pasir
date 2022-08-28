// localhost:3000
import MeetupList from '../components/meetups/MeetupList'

const HomePage = () => {
  return (
    <MeetupList meetups={[
      {
        id: 1,
        title: 'First Meetup',
        image: 'https://images.unsplash.com/photo-1661522611945-292953939679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Some Address',
        description: 'This is a first meetup'
      },
      {
        id: 2,
        title: 'Second Meetup',
        image: 'https://images.unsplash.com/photo-1661659766944-d087b44801d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Some Second Address',
        description: 'This is a second meetup'
      }
    ]} />
  )
}

export default HomePage
