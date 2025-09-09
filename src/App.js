import React, { useContext } from 'react'; // اوبشن يعني مش لازم تقول انك شغال رياكت
import Main from './Home/Main'; // هنا بنستورد  من فولدر هوم
import Preloader from './Components/Preloader';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import { apiValue } from './Data/AllData';


// طريقة كود jsx
// اللي بيترجمهاbabel ومينفعش يبقي ديف تحته ديف  لا لازم يبقي ديف جواه اي كمية من الديفات
// function base component

function App() {
    const data = useContext(apiValue)
return (
    <div >
        <Preloader/>
        <SubNavbar/>
        <Navbar/>
        <Main/>
    </div>
);
}
export default App; // لازم تصدرها عشان تشتغل
// من غير اقوااااااس
