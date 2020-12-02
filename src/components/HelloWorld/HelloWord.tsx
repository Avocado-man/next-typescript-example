import s from './HelloWorld.module.scss'

const HelloWord = (): JSX.Element => {
  return (
    <div className={s.helloWorld}>
      <h1>Hello World</h1>
    </div>
  )
}

export default HelloWord
