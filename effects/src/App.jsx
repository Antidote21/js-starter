import './App.css'
import Counter from './counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcher.Loader'
import ProfileSearchForm from './ProfileSearchForm'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
function App() {


  return (
    <>
      <QuoteFetcherLoader />
      <ProfileViewerWithSearch />
    </>
  )
}

export default App
