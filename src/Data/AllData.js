import axios from 'axios';
import React, { createContext , useState, useEffect} from 'react'

const apiValue = createContext();//عشان نباصيها لكل الصفحات زي الكورة

function AllData({children}) {
    const [api,setApi]= useState([]) ;// عشان نخزن فيها الداتا اللي جايه من ال api
    // هنا اي تغيير بيحصل لحظي "بأمن نفسي"
    useEffect( ()=>{

        axios.get('https://dummyjson.com/products')
        .then((result)=>{
            setApi(result.data.products) // بإستخدام ال setApi بنخزن الداتا اللي جايه من ال api في ال api اللي فوق
        })
        
    },[] );

return (
    <apiValue.Provider value={api}>
        {children} 
    </apiValue.Provider>
)

}
// ال اول داتا هي اللي بتخلي الapivalue توصل لكل الصفحات
export {AllData,apiValue}; // بنشيل الديفلت عشان نبعت اكتر من قيمة

// وطبعا هنا بنحط ال alldataفي الاندكس دوت جي اس عشان نبعتها لكلو

// children حطيناهم تحت رجل ال apivalue عشان نبعتهم لكل الصفحات

// كدا نقدر نستخدم ال apivalue في اي صفحة عايزينها
// في الصفحات دي بقا بنحط اليوز كونتكس عشان نستخدم ال apivalue
// e.g const color= useContext(apiValue);


//عايزين بقا نستخدم ال usestate و ال useEffect
// usestate = دا اي تغيير بيحصل فالداتا قدام عينك من غير الريفرش حتي