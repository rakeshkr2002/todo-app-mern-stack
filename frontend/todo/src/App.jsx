import Head from "./components/Head"
import InputTask from "./components/InputTask"
import Tasks from "./components/Tasks"
import ContextApi from "./context/ContextApi"

const App = () => {
  return (
    <>

<ContextApi>
<div className='main-head'>
        <Head></Head>
        <InputTask></InputTask>
        <Tasks></Tasks>
      </div>
</ContextApi>
      
    </>
  )
}

export default App
