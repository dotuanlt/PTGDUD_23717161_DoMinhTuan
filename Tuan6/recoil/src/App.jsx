
import { useRecoilValue } from 'recoil'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ThemeComponent from './components/ThemeComponent'
import ThemeAtom from './states/ThemeAtom'

function App() {
  var theme = useRecoilValue(ThemeAtom);
  console.log(theme);
  
  return (
    <>
    <div className='{theme}'>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
      <ThemeComponent></ThemeComponent>
    </div>
      
    </>
  )
}

export default App
