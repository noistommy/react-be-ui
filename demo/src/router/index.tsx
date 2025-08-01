import { lazy } from 'react'
import { Routes, Route } from 'react-router'

// pages
import GlobalView from '../pages/GlobalView'
import TestComp from '../component/TestComp'
import NotFound from '../pages/NotFound'

const ButtonView = lazy(() => import('../pages/ButtonView'))
const ButtonGroupView = lazy(() => import('../pages/ButtonGroupView'))
const InputView = lazy(() => import('../pages/InputView'))
const InputNumberView = lazy(() => import('../pages/InputNumberView'))
const CheckboxView = lazy(() => import('../pages/CheckboxView'))
const CheckboxGroupView = lazy(() => import('../pages/CheckboxGroupView'))
const RadiosView = lazy(() => import('../pages/RadiosView'))
const SwitchView = lazy(() => import('../pages/SwitchView'))
const TagView = lazy(() => import('../pages/TagView'))
const BadgeView = lazy(() => import('../pages/BadgeView'))
const MessageView = lazy(() => import('../pages/MessageView'))
const TableView = lazy(() => import('../pages/TableView'))
const ListView = lazy(() => import('../pages/ListView'))
const CardView = lazy(() => import('../pages/CardView'))
const SliderView = lazy(() => import('../pages/SliderView'))
const PaginationView = lazy(() => import('../pages/PaginationView'))
const SelectboxView = lazy(() => import('../pages/SelectboxView'))
const PanelView = lazy(() => import('../pages/PanelView'))
const TreeListView = lazy(() => import('../pages/TreeListView'))
const SegmentView = lazy(() => import('../pages/SegmentView'))
const TabsView = lazy(() => import('../pages/TabsView'))
const GridView = lazy(() => import('../pages/GridView'))
const FormView = lazy(() => import('../pages/FormView'))

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TestComp />} />
      <Route path="/globals" element={<GlobalView />} />
      <Route path="/button" element={<ButtonView />} />
      <Route path="/button-group" element={<ButtonGroupView />} />
      <Route path="/input" element={<InputView />} />
      <Route path="/input-number" element={<InputNumberView />} />
      <Route path="/checkbox" element={<CheckboxView />} />
      <Route path="/checkbox-group" element={<CheckboxGroupView />} />
      <Route path="/radio" element={<RadiosView />} />
      <Route path="/switch" element={<SwitchView />} />
      <Route path="/tag" element={<TagView />} />
      <Route path="/badge" element={<BadgeView />} />
      <Route path="/message" element={<MessageView />} />
      <Route path="/table" element={<TableView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/card" element={<CardView />} />
      <Route path="/slider" element={<SliderView />} />
      <Route path="/pagination" element={<PaginationView />} />
      <Route path="/selectbox" element={<SelectboxView />} />
      <Route path="/panel" element={<PanelView />} />
      <Route path="/tree" element={<TreeListView />} />
      <Route path="/segment" element={<SegmentView />} />
      <Route path="/tabs" element={<TabsView />} />
      <Route path="/grid" element={<GridView />} />
      <Route path="/form" element={<FormView />} />
      {/* 404 not found */}
      <Route path="*" component={NotFound} />
    </Routes>
  )
}