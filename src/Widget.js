// import { DndContext, DragOverlay } from '@dnd-kit/core';
// import React from 'react';
// import DraggableItem from './dragdrop.js'; // Assuming DraggableItem is imported correctly

// const WidgetContainer = ({ children }) => {
//   const child = React.Children.only(children);
//   return (
//     <DndContext>
//       <DraggableItem child={child} />
//       <DragOverlay>
//         {({ id, isDragging }) => (
//           <div
//             style={{
//               display: isDragging ? 'block' : 'none',
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               pointerEvents: 'none',
//             }}
//           >
//             <div
//               style={{
//                 width: 100,
//                 height: 100,
//                 backgroundColor: 'blue',
//                 borderRadius: 10,
//                 opacity: 0.5,
//               }}
//             >
//               Dragging...
//             </div>
//           </div>
//         )}
//       </DragOverlay>
//     </DndContext>
//   );
// };

// export default WidgetContainer;

// // // import { DndContext, DragOverlay, useDraggable } from '@dnd-kit/core';
// // // import { CSS } from '@dnd-kit/utilities';
// // import { DndContext, DragOverlay } from '@dnd-kit/core';

// // import React from 'react';
// // import DraggableItem from './dragdrop.js';

// // // const DraggableItem = ({ id, children }) => {
// // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({
// // //     id,
// // //   });

// // //   return (
// // //     <div
// // //       ref={setNodeRef}
// // //       style={{
// // //         transform: CSS.Transform.toString(transform),
// // //         cursor: 'grab',
// // //         userSelect: 'none',
// // //       }}
// // //       {...attributes}
// // //       {...listeners}
// // //     >
// // //       {children}
// // //     </div>
// // //   );
// // // const DraggableItem = ({ id, child }) => {
// // //     const { attributes, listeners, setNodeRef, transform } = useDraggable({
// // //       id,
// // //     });
  
// // //     return (
// // //       <div
// // //         ref={setNodeRef}
// // //         style={{
// // //           transform: CSS.Transform.toString(transform),
// // //           cursor: 'grab',
// // //           userSelect: 'none',
// // //         }}
// // //         {...attributes}
// // //         {...listeners}
// // //       >
// // //         {child}
// // //       </div>
// // //     );
// // //   };
  
// // //   export default DraggableItem;
// // // };

// // const WidgetContainer = ({ children }) => {
// //   return (
// //     <DndContext>
// //         <DraggableItem>
// //           {children}
// //         </DraggableItem>
// //       <DragOverlay>
// //         {({ id, isDragging }) => (
// //           <div
// //             style={{
// //               display: isDragging ? 'block' : 'none',
// //               position: 'fixed',
// //               top: 0,
// //               left: 0,
// //               pointerEvents: 'none',
// //             }}
// //           >
// //             <div
// //               style={{
// //                 width: 100,
// //                 height: 100,
// //                 backgroundColor: 'blue',
// //                 borderRadius: 10,
// //                 opacity: 0.5,
// //               }}
// //             >
// //               Dragging...
// //             </div>
// //           </div>
// //         )}
// //       </DragOverlay>
// //     </DndContext>
// //   );
// // };

// // export default WidgetContainer;

// // // // import { DndContext, rectIntersection, useDraggable, useDroppable } from '@dnd-kit/core';
// // // // import { CSS } from "@dnd-kit/utilities";
// // // import { DndContext, DragOverlay, useDraggable } from '@dnd-kit/core';
// // // import { CSS } from '@dnd-kit/utilities';
// // // import React from 'react';

// // // // function DraggableItem() {
// // // //     const {attributes, listeners, setNodeRef, transform} = useDraggable({
// // // //       id: 'draggable',
// // // //     });
// // // const DraggableItem = ({ id, children }) => {
// // //     const { attributes, listeners, setNodeRef, transform } = useDraggable({
// // //       id,
// // //     });
// // //     const style = {
// // //       transform: CSS.Translate.toString(transform),
// // //     };
    
// // //     return ( 

// // //         <div
// // //       ref={setNodeRef}
// // //       style={{
// // //         transform: CSS.Transform.toString(transform),
// // //         cursor: 'grab',
// // //         userSelect: 'none',
// // //       }}
// // //       {...attributes}
// // //       {...listeners}
// // //     >
// // //         {children}
// // //     </div>
// // //     // <div 
// // //     //     {...attributes} 
// // //     //     {...listeners} 
// // //     //     ref={setNodeRef} 
// // //     //     styles={{transfrom: CSS.Translate.toString(transform) }}>Drag Me!</div>
// // //     // //   <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // //     // //     /* Render whatever you like within */
        
// // //     // //   </button>
// // //     );
// // //   }

// // // // function Droppable() {
// // // //   const {setNodeRef} = useDroppable({
// // // //     id: 'droppable',
// // // //   });
  
// // // //   return (
// // // //     <div ref={setNodeRef}>
// // // //       /* Render whatever you like within */
// // // //     </div>
// // // //   );
// // // // }



// // // const WidgetContainer = () => {
// // //     // const style = {
// // //     //     transform: CSS.Translate.toString(transform),
// // //     //   };

// // //     return (    <DndContext>
// // //         <DraggableItem id="item">
// // //           <div
// // //             style={{
// // //               width: 100,
// // //               height: 100,
// // //               backgroundColor: 'blue',
// // //               borderRadius: 10,
// // //             }}
// // //           >
// // //             Drag me!
// // //           </div>
// // //         </DraggableItem>
// // //         <DragOverlay>
// // //           {({ id, isDragging }) => (
// // //             <div
// // //               style={{
// // //                 display: isDragging ? 'block' : 'none',
// // //                 position: 'fixed',
// // //                 top: 0,
// // //                 left: 0,
// // //                 pointerEvents: 'none',
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   width: 100,
// // //                   height: 100,
// // //                   backgroundColor: 'blue',
// // //                   borderRadius: 10,
// // //                   opacity: 0.5,
// // //                 }}
// // //               >
// // //                 Dragging...
// // //               </div>
// // //             </div>
// // //           )}
// // //         </DragOverlay>
// // //       </DndContext>
// // //     // <DndContext collisionDetection={rectIntersection}>
// // //     //     <div>
// // //     //         {children}
// // //     //     </div>
// // //     //     </DndContext>
// // //     );
// // // };

// // // export default WidgetContainer;
// // // // import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
// // // // import { restrictToParentElement } from '@dnd-kit/modifiers';
// // // // import { CSS } from '@dnd-kit/utilities';
// // // // import React from 'react';
// // // // import './Widget.css';

// // // // const WidgetContainer = ({ children }) => {
// // // //   return (
// // // //     <DndContext>
// // // //       <div>
// // // //         {children}
// // // //       </div>
// // // //     </DndContext>
// // // //   );
// // // // };

// // // // const DraggableWidget = ({ id, children }) => {
// // // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({
// // // //     id,
// // // //     modifiers: [restrictToParentElement],
// // // //   });

// // // //   const style = {
// // // //     transform: CSS.Transform.toString(transform),
// // // //     cursor: 'grab',
// // // //   };

// // // //   return (
// // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // };

// // // // const DroppableWidget = ({ children }) => {
// // // //   const { setNodeRef } = useDroppable({
// // // //     id: 'droppable',
// // // //   });

// // // //   const style = {
// // // //     // position: 'fixed',
// // // //     width: '100vw',
// // // //     height: '100vh',
// // // //     // backgroundColor: isOver ? 'lightblue' : 'transparent',
// // // //   };

// // // //   return (
// // // //     <div ref={setNodeRef} style={style}>
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // };

// // // // export { WidgetContainer, DraggableWidget, DroppableWidget };
