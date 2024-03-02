const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};

const Part = ({ partName, exercises }) => {
  return (
    <div>
      <p>{partName} {exercises}</p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Footer = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  );
};

export default App;
