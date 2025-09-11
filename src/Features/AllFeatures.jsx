import React from 'react'
import NavBar from '../Components/Navbar';


// make events
//1- onChange
// بنجيب الداتا اللي بنكتبها في الانبوت
// بنستخدمها فالسيرش
// بنسحب القيمة وبنعمل اتشك عليها فال api ونشوف لو موجودة ولا لا

function AllFeatures() {
    const getData = (event) => {
        console.log(event.target.value);
    }
return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form>
            <input type='text' name='user' onChange={getData}></input>
            <input type='submit' value='enter'></input>
        </form>
    </div>
)
}

export default AllFeatures


//2- onClick


//function AllFeatures() {
//    const getData = () => {
//        console.log(123)
//    }
//  return (
//    <div>
//        <NavBar />
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <button onClick={getData}>click</button>
//    </div>
//  )
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
//        <NavBar />
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



