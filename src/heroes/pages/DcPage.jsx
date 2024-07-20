
import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <>
      <h2 className="text-center">DC Comics</h2>
      <HeroList publisher='DC Comics' />
    </>
  )
}