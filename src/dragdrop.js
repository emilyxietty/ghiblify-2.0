// const DraggableItem = ({ id, child }) => {
//     const { attributes, listeners, setNodeRef, transform } = useDraggable({
//       id,
//     });
  
//     return (
//       <div
//         ref={setNodeRef}
//         style={{
//           transform: CSS.Transform.toString(transform),
//           cursor: 'grab',
//           userSelect: 'none',
//         }}
//         {...attributes}
//         {...listeners}
//       >
//         {child}
//       </div>
//     );
//   };
  
//   export default DraggableItem;