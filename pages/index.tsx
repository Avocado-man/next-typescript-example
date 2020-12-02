import { NextPage } from 'next'
import HelloWord from '../src/components/HelloWorld/HelloWord'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: number
    rocket: string
  }
}
const IndexPage: NextPage<Props> = () => {
  return (
    <main>
      <HelloWord />
    </main>
  )
}
export default IndexPage
