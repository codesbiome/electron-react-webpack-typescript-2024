import './react-grid-layout.css'
import './react-resizeable.css'
import '../Page.scss';
import React from 'react';

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class PageGrid extends React.Component {
  render() {
    return (
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={50}
        isBounded={true}
        resizeHandles={['sw']}
        containerPadding={[0,0]}
        breakpoints={{ lg: 800, md: 600, sm: 400, xs: 200, xxs: 100 }}
      >
        <div key="1" data-grid={{ x: 1, y: 0, w: 8, h: 1, minW: 2, maxW: 8 }}>בדיקה</div>
        <div key="2" data-grid={{ x: 1, y: 1, w: 8, h: 2, minW: 2, maxW: 8 }}>בדיקה 2</div>
        <div key="3" data-grid={{ x: 1, y: 2, w: 8, h: 2, minW: 2, maxW: 8 }}>בדיקה 3</div>
        <div key="4" data-grid={{ x: 1, y: 3, w: 8, h: 2, minW: 2, maxW: 8 }}>בדיקה 4</div>
      </ResponsiveGridLayout>
    );
  }
}

export default PageGrid
