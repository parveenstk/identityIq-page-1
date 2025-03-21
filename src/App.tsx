import Body from "./components/Body"
import Footer from "./components/Footer"
// import GetAuraToday from "./components/GetAuraToday"
import Header from "./components/Header"
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row px-4 sm:px-0 justify-center gap-8">
        <Body className="sm:w-7/12" />
        <div className="sm:w-1/4">
          {/* <GetAuraToday /> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App