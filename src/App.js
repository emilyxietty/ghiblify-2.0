// src/App.js
import React from 'react';
import './App.css';
import DateWidget from './Date.js'; // check the path and no curly braces
import './Widget.css';
// import bg from './img/bg1.jpg';
import { useTheme } from '@mui/material/styles';
import Background from './Bg.js';
import SettingsModal from './Settings.js';
// import WidgetContainer from './Widget.js';
// import { DraggableWidget, DroppableWidget, WidgetContainer } from './Widget';

// import { Widget, WidgetContainer } from './Widget.js';

// import {DndContext} from '@dnd-kit/core';


import TimeWidget from './Time.js'; // check the path and no curly braces

function App() {
    const theme = useTheme();
  return (
    <div className="App">
        <Background/>
    <div className="Header">
        <SettingsModal />
        {/* <WidgetContainer /> */}
        <div>
    </div>
    </div>
    <div className="Widgets light">
        {/* <WidgetContainer>Test</WidgetContainer> */}
        {/* <WidgetContainer> */}
        <TimeWidget />
      {/* </WidgetContainer> */}
            {/* <TimeWidget /> */}
            <DateWidget />
            {/* <DroppableWidget>Droppable Area</DroppableWidget> */}
        {/* </WidgetContainer> */}
        {/* <h1 style={{ color: theme.palette.primary.main }}>Hello World</h1> */}
    </div>
</div>
  );
}

export default App;
