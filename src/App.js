import React, { useContext } from 'react'; // اوبشن يعني مش لازم تقول انك شغال رياكت
import Main from './Home/Main'; // هنا بنستورد  من فولدر هوم
import Preloader from './Components/Preloader';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import { apiValue } from './Data/AllData';
import Cart from './Cart' ;
import { CartProvider } from 'react-use-cart';

// طريقة كود jsx
// اللي بيترجمهاbabel ومينفعش يبقي ديف تحته ديف  لا لازم يبقي ديف جواه اي كمية من الديفات
// function base component
// اغلب اكواد ال جافا بتتكتب قبل الريترن

function App() {
    const data = useContext(apiValue)
return (
    <CartProvider>
        <Preloader/>
        <SubNavbar/>
        <Navbar/>
        <Main/>
        <Cart nameee="ali" ageee="20"/> {/* هنا بعتنا داتا من الاب لل كارت عن طريق البروبس */}
    </CartProvider>
);
}
export default App; // لازم تصدرها عشان تشتغل
// من غير اقوااااااس



// طبعا قولنا ممكن نبعت تاجات او كومبوننت كامل  حتي او قيم
// <cart>
// </h2>hiii from father</h2>
//</cart>
// في الكارت نقدر نستقبلها عن طريق البروبس
// props.children
//  ممكن نبعت كومبوننت
// <cart>
// <Download/>
// </cart>
// في الكارت نقدر نستقبلها عن طريق البروبس


//how to handel object with object
// عايزين نطلع قيمة من اوبجكت as a props نوديها الناحية التانيه
// كود ال js  بنكتبه قبل ا لreturn
// const person=[
// {firstname:"ali",lastname:"omar",color:"red" ,id:1},
// {firstname:"ahmed",lastname:"fares",color:"green" ,id:2},
// {firstname:"nour",lastname:"ahmed",color:"black" ,id:3},
// {firstname:"hagar",lastname:"mokhtar",color:"pink" ,id:4},
// ]
//  هنطلع ف تاج الكارت  نشتغل ب index
// <cart nameee={person.[1]+ person[1].lastname } colorrr={ person[2].color}/>
// نروح بقا نستقبل هناك ف فايل كارت