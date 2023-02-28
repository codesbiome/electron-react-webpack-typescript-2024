import React, { useEffect, useState } from 'react';
import './Application.scss';

import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    NO_GROUP
  } from "kbar";
  
const actions = [
    {
        id: "blog",
        name: "Blog",
        shortcut: ["b"],
        keywords: "writing words",
        perform: () => (window.location.pathname = "blog"),
    },
    {
        id: "contact",
        name: "Contact",
        shortcut: ["c"],
        keywords: "email    ",
        perform: () => (window.location.pathname = "contact"),
    },
]
function KBar() {
    return (
        <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <KBarSearch />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <KBar />
      </KBarProvider>
    );
}
export default KBar;