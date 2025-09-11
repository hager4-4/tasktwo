// // الصفحه دي هي الربط بين الابواندكس اتش تي ام ال



// // الرياكت دوم من ضمن الdependencies اللي بنحتاجها عشان نقدر نستخدم الرياكت
// import ReactDOM from 'react-dom/client';
// import App from './App'; // هنا الدوت اسلاش عشان نخرج برا الفايل دا مش src // app=app.js


// // الكرييت روت دا معتمد ع index.html
// const root = ReactDOM.createRoot(document.getElementById('root')); // => root=index.html
// root.render(<App />); // كدا روت جواها ااب
// // here we are  using App as a self closing tag


import * as React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { AllData } from "./Data/AllData";
import AllFeatures from "./Features/AllFeatures";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App/>
    ),
  },

  {
    path: "features",
    element: (
        <AllFeatures/>
    ),
  },
  
]);

createRoot(document.getElementById("root")).render(
  <AllData>
    <RouterProvider router={router} /> 
  </AllData>
  // هنا ال بين الكلوزينج تاج children
  // هنروح بقا لل alldata ونكتب الطفل دا فيهاااا
  // الصفحات دي كلها اتبصات as a props و children لل props
); 
