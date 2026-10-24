const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.title.name}
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.name} - number of exercises: {props.exercises} </p>
    </div>
  )
}


const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part name={props.data.parts[0].name} exercises={props.data.parts[0].exercises} />
      <Part name={props.data.parts[1].name} exercises={props.data.parts[1].exercises}/>
      <Part name={props.data.parts[2].name} exercises={props.data.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  const parts = props.total.parts
 
  return (
    <div>
      <p>
        Number of exercises: {parts.reduce((sum, element)=> sum + element.exercises, 0)}
      </p>
    </div>
  )
}

const App = () => {
  const course ={
     name:'Half Stack application development',
     parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10 
      },
      {
        name: 'Using props to pass data',
        exercises: 7 
      },
      { 
        name: 'State of component',
        exercises: 14
    }
  ]
}
  
  

  return (
    <div>
      <Header title={course}/>
      <Content data={course}/>
      <Total total={course}/>

    </div>
  )
}

export default App