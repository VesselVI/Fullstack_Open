const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.title} - number of exercises: {props.num} </p>
    </div>
  )
}


const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part title={props.title1} num={props.number1} />
      <Part title={props.title2} num={props.number2} />
      <Part title={props.title3} num={props.number3} />
    </div>
  )
}

const Total = (sum) => {
  console.log(sum)
  return (
    <div>
      <p>
        Number of exercises: {sum.a + sum.b + sum.c}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content
        title1={part1} number1={exercises1}
        title2={part2} number2={exercises2}
        title3={part3} number3={exercises3} />


      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

export default App