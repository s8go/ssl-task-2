import Nav from "./components/Nav/NavBar"
import styles from "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/main/Main"

function App() {

  return (
    <>
   <div className="container-fluid row mx-auto ">

    <Nav/>
<div className="m-auto d-md-flex" style={{paddingTop:"6em"}}>
<Sidebar/>
<Main/>
</div>
</div>

    </>
  )
}

export default App
