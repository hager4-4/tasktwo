import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'


// make events
//1- onChange
// بنجيب الداتا اللي بنكتبها في الانبوت
// بنستخدمها فالسيرش
// بنسحب القيمة وبنعمل اتشك عليها فال api ونشوف لو موجودة ولا لا

//function AllFeatures() {
//    const getData = (event) => {
//        console.log(event.target.value);
//    }
//return (
//    <div>
//        
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <form>
//            <input type='text' name='user' onChange={getData}></input>
//            <input type='submit' value='enter'></input>
//        </form>
//    </div>
//)
//}

//export default AllFeatures


//2- onClick


//function AllFeatures() {
//    const getData = () => {
//        console.log(123)
//    }
//    return (
//    <div>
//        
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//       <button onClick={getData}>click</button>
//    </div>
//    )
//}

//export default AllFeatures


//3-onSubmit
// بنوقف السبمت من الريفرش 
// event.preventDefault()

//function AllFeatures() {
//    const getData = (event) => {
//        console.log(123);
//        event.preventDefault()
//    }
//return (
//    <div>

//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <form onSubmit={getData}>
//            <input type='text' name='user'></input>
//            <input type='submit' value='enter'></input>
//        </form>
//    </div>
//)
//}

//export default AllFeatures


// ******************//
//UseState&UseEffect
//1- useState = دا اي تغيير بيحصل فالداتا قدام عينك من غير الريفرش حتي
// بتعمل rerender
//2-useEffect= دا اي تغيير بيحصل فالداتا من غير ما تشوفه
// بتاخد مني قيمتين
// 1- function عايزها تتنفذ لما الداتا تتغير
// 2- array of dependencies (dependencylist)
// لما الداتا دي تتغير نفذلي الفنكشن اللي فوق   



function AllFeatures() {
    const[text,setText]= useState([]);
    const [search,setSearch]= useState(0);
    
    useEffect( ()=>{

        axios.get('https://dummyjson.com/products')
        .then((Element)=>{ setText(Element.data.products) })

    }, );

    const getSearch = (event)=>{
        setSearch(event.target.value);
    }
    
return (
    <div>
        
        <br></br>
        <br></br>
        <br></br>

        <div className='container'>
            <div className='row'>

                <div className='col-md-10 m-auto'>
                    <input className='form-control'placeholder='search with id' onChange={getSearch} />
                </div>

                {text.map( (result)=>{
                    return search==0 ?(
                        <div  key={result.id} className='col-md-4 text-center mb-4'>
                            <img src={result.images[0]} className='img-fluid' style={{height:'330px'}} alt='mm'></img>
                            <h4>{result.title}</h4>
                            <h6>{result.category}</h6>
                            <h6>{result.price}</h6>
                            <h6>{result.id}</h6>
                        </div>
                ): result.id==search ?(
                    <div  key={result.id} className='col-md-4 text-center mb-4'>
                            <img src={result.images[0]} className='img-fluid' style={{height:'330px'}} alt='mm'></img>
                            <h4>{result.title}</h4>
                            <h6>{result.category}</h6>
                            <h6>{result.price}</h6>
                            <h6>{result.id}</h6>
                        </div>
                ): null
                })
                }
            </div>
        </div>
        
        
    </div>
)
}
// ال result اللي فوق دي شايله api كامل 
// بنحط بقا ريزلت دوت ال حاجة اللي عايزينها

export default AllFeatures

// البراكت اللي جنب اليوزاستيت دي الديفولت فاليو يعني القيمة المبدأيه
    // القيمة التانيه" setText دي بتغير القيمة الاولانيه
    // الarray الفاضيه دي هنحط فيهاال اي بي اي

    //***********************
//    useEffect( ()=>{
//        fetch('https://jsonplaceholder.typicode.com/photos')
//        .then( (item)=>{ return item.json() } )
//        .then((Element)=>{ setText(Element) })
//    }, );

    //***********************
    // هنا حطينا ال text عشان اي تغيير يحصل فيه ينفذلي الفنكشن اللي فوق
    // حتي لو محطيناش حاجة في ال array of dependencies
    // الفنكشن اللي جوه اليوز افكت بتتنفذ اول ما الصفحة تفتح
    // لو حطينا براكت فاضيه مش هتتنفذ غير اول مره بس

    // api لازم يتحول ل جيسون عشان نقدر نستخدمه
    // بنحط ف الزن ايتم والايتم دي الممثل الرئيسي ل api 
    // وبعدها ريترن الايتم دوت جيسون عشان يتحول
    // وبعدها بنعمل زن تاني عشان نستخدم الداتا اللي اتحولت
    // واللي جواها ال element دي الممثل الرئيسي للداتا اللي جايه من ال api
    // وبنستخدم ال setText عشان نخزن الداتا في ال text اللي فوق
    //***********************
    // هنشتغل بقا معaxios بدل ال fetch
    // الاكسوز بتجيب اوبجكت كامله جواهاdata
    // فبنستخدم ال دوت داتا عشان نجيب الداتا اللي جواها
    // كدا اختصرنا اننا نحولها لجيسون
    // يعني بقت زن واحده

