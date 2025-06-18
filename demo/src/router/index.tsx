import { Routes, Route } from 'react-router'

// pages
import GlobalView from '../pages/GlobalView'
import TestComp from '../component/TestComp'
import NotFound from '../pages/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TestComp />} />
      <Route path="/globals" element={<GlobalView />} />
      <Route path="*" component={NotFound} />
    </Routes>
  )
}