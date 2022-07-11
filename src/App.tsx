import React, {lazy, Suspense} from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {RemoteComponent} from "react-dynamic-remote-component";

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <div style={{display: "flex", flexDirection: 'column', height: '100vh'}}>
    <header style={{height: '70px', background: '#ccc'}}>
    </header>
    <BrowserRouter>
      <Routes>
        <Route
          path="/map/*"
          element={
            <RemoteComponent url="http://localhost:5001/js/remoteEntry.js" scope="map_app" module="./Routes"/>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
)
