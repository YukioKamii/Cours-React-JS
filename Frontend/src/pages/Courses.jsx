import Card from '../components/CoursesIndex/Card';
import './Courses.css';

function Courses(){
  const courses = [
    {
      title: 'Course 1',
      content: 'lorem ipsum dolor sit amet lore mauris, consectetur adipiscing elit'
    },
    {
     title: 'Niglot de ses morts',
     content: 'adzucibciubzicbiuzbiucibzzzc' 
    },
  ];


    return(
        <>
          <h1>Liste de cours</h1>
          {courses.map((course) => (
            <Card title={course.title} content={course.content}/>
          ))}
          
        </>
    );
}

export default Courses;
    