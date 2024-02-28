import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TestComponent } from './components/0_scratch_component';
import { StaticPage } from './components/1_static_page';
import { Header, Footer, MainContent } from './components/2_header_main_footer';
import { JsBasicEmbed } from './components/3_embed_js';
import { PropsFruit } from './components/4_props_fruit';
import PropsAnimals from './components/5_props_animals';
import TodoManual from './components/6_cond_rendering_todo_list';
import FruitStock from './components/7_cond_rendering_fruit_stock';
import ArrayRender from './components/8_render_array';
import ArrayDetailRender from './components/9_render_detail_array';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/10_navbar';

import './styles/components.css';
import StaticPagePage from './pages/1_static_page';

export default function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/staticPage" element={<StaticPagePage />} />
          <Route path="/js-basic" element={<JsBasicEmbed />} />
          <Route path="/props-fruit" element={<PropsFruit />} />
          <Route path="/props-animals" element={<PropsAnimals />} />
          <Route path="/todo-manual" element={<TodoManual />} />
          <Route path="/fruitstock" element={<FruitStock />} />
          <Route path="/array-render" element={<ArrayRender />} />
          <Route path="/array-detail-render" element={<ArrayDetailRender />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}


      // {/* <StaticPage /> */}
      // {/* <Header />
      // <MainContent />
      // <Footer />
      // <h1>Hello world!</h1> */}
      // {/* <h1><JsBasicEmbed /></h1> */}
      // {/* <PropsFruit /> */}
      // {/* <PropsAnimals /> */}
      // {/* <TodoManual /> */}
      // {/* <FruitStock /> */}
      // {/* <ArrayRender /> */}
      // {/* <ArrayDetailRender /> */}