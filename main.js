import {
  Editor,
  Color4,
  BackgroundComponentBackgroundType,
  makeEdgeToolbar,
  TextTool,
  PenTool,
  PenToolWidget,
//   ComponentBuilderFactory,
  makePolylineBuilder
} from "js-draw";
import { MaterialIconProvider } from "@js-draw/material-icons";
import "js-draw/styles";
import "./js-draw-overrides.css";

const graph = document.querySelector(".graph-wrapper");
// const customPenFactory = (startPoint, viewport) => {
//   return makePolylineBuilder(startPoint, viewport);
// };
let editor = new Editor(graph, {
  iconProvider: new MaterialIconProvider(),
//   pens: {
//     // The polyline is already present by default --
//     additionalPenTypes: [
//       {
//         name: "Polyline pen",
//         id: "custom-polyline",
//         factory: customPenFactory,

//         // The pen doesn't create fixed shapes (e.g. squares, rectangles, etc)
//         // and so should go under the "pens" section.
//         isShapeBuilder: false,
//       },
//     ],
//   },
});
const toolbar = makeEdgeToolbar(editor);
// ...with the default elements
toolbar.addDefaults();
const firstPen = editor.toolController.getMatchingTools(PenTool)[0];
firstPen.setStrokeFactory(makePolylineBuilder);

const addToHistory = false;
editor.dispatch(
  editor.setBackgroundStyle({
    type: BackgroundComponentBackgroundType.Grid,
  }),
  addToHistory,
);
editor.setBackgroundColor({
  color: Color4.fromHex("#fff"),
});
const textTools = editor.toolController.getMatchingTools(TextTool);
const textTool = textTools[0]
textTool.setFontSize(16);
textTool.setColor(Color4.fromHex("#222"));
editor.dispatch(editor.image.setAutoresizeEnabled(true), addToHistory);
// document.querySelector("input#toolbar-docPropertiesColorInput-0").value = '#ffffff';
// Alternatively, using .setBackgroundStyle:
// editor.dispatch(editor.setBackgroundStyle({ autoresize: true }), addToHistory);
editor.getRootElement().style.height = "50vh";

window.editor = editor; // Delete for prod
window.pen = firstPen;
// window.widget = new PenToolWidget({
//     editor: editor,
//     tool: firstPen,
// })