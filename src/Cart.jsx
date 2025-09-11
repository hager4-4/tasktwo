import React from 'react'

function cart(props) { //هنا بنستقبل البروبس بشكل مباشر
    // اللي بين البراكتس دا عبارة عن تخزين ال name,age
  return (
    <div>
        <h2>My name is {props.nameee}</h2>
        <h2>My age is {props.ageee}</h2>
    </div>
  )
}
// عايزين نبعت بيانات من كومبوننت للتاني
// handle with props

export default cart

// في قواعد عامة
// 1- عشان نكتب كود ريأكت جوا jsx لازم يكون جوا كيرلي براكتس
// لازم props.الاسم اللي انت كاتبه ف الاب
// ممكن نشيل البروبس اللي فوق دي ونستبدلها ب كيرلي براكتس جواها ال nameee,ageee
// function cart({nameee,ageee}) { //هنا بنستقبل البروبس بشكل مباشر
// كدا as a parameter
// كدا طريقه واحده ف الارسال وطريقيتن استقبال

//  ممكن نبعت تاجات او كومبوننت كامل  حتي او قيم 
// بنستقبل عن طريق كلمة children
// function cart({children}) { //هنا بنستقبل البروبس بشكل مباشر

// how to handel object with object
// نستقبل بقا يلا 
// function cart({nameee,colorrr}) { //هنا بنستقبل البروبس بشكل مباشر
// <h2>My name is {nameee}</h2>
// <h2>My color is {colorrr}</h2>
// كدا استقبلنا
// الكلام دا هيكون data base 


// mapping
// لو عايزين نطلع اكتر من عنصر من اوبجكت

//  person.map((item)=>{
    // return(
    //    <div>
    //       { item.firstname}
    //    </div>
    //       )
//}

// بتلف ع عنصر عنصر وبتسلم المطلوب اللي هو الايتم
// الايتم هنا الممثل الرئيسي لل اوبجكت اللي جوا ال اراي
// كدا طلع كل ال فيرست نيم

// if condition with map
// عايزين نطلع حاجه معينه مش كلها

//import React from 'react'

//function cart() {

        
  //return (
    //<div>
        // {person.map((item)=>{
            // if(item.id>=3){
              // return(
                //<div>
                    // <h2>My name is {item.firstname}</h2>
                    // <h2>My color is {item.color}</h2>
                //</div>
              //)
              //}else if (item.id==1){
                // return(
                  //<div>
                      // <h2> Not In Range</h2>
                    //</div> 
                //)
                // }

    // </div>
//)
//}

//export default cart


        // condition ? true : false
// {person.map((item)=>{
//  return item.id>=3 ? (
//   <div>
//     <h2>My name is {item.firstname}</h2>
//   <div>  ):null // اجباري
// }


