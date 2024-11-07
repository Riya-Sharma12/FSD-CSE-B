// console.log("hello world");
// var a=10;
// console.log(a);
// {
//     var a=20;
//     console.log(a)
// }
// function print(){
//     var a=30;
//     console.log(a);
// }
// print();

// type of 

// a=10;
// b="riya sharma"
// console.log(typeof a);  //number
// console.log(typeof b);  //string
// c=Date();
// console.log(typeof c)  //string
// console.log(c);


//******************************************************************************************* */


// let a=10;
// let b="10"
// if(a==b){
//     console.log("welcome");
// }
// else{
//     console.log("world");
// }

//== checks value
//=== checks type

// let myname= "riya sharma";
// let myage=123;
// let result=`Hello ! my name is ${myname} and my age is ${myage}`
// console.log(result);


//working with objects::


// let ob ={
//     name : "riya sharma",
//     branch : "cse-c",
//     college : "abes-ec"
// };
// console.log(typeof ob);
// console.log(ob)
// console.log(ob.name+" branch is: "+ ob.branch+ " and college is:"+ob.college);

//destructuring of the given object:

// const{name}=ob;
// console.log(name);
// ob[name]="khushi";
// console.log(ob.name);


// const arr=[
// {
//     name: "riya sharma",
//     class :"cse-b"
// },
// {
//     name: "khushi sharma",
//     class :"cse-c"
// },
// {
//     name: "shubh sharma",
//     class :"cse-a"
// }]

// console.log(arr[1].name);


// working with functions::

// function printname(name){
//     console.log(`hello sherry! my name is ${name}`);
// }
// printname("riya sharma")

// function print(msg)
// {
//     console.log(msg); // undefined
// }
// print();


// function add(a,b){
//     return a+b;
// }
// let ans=add(2,3);
// console.log(ans);

// function sum(a,b,c=9){
//     return a+b+c;
// }
// console.log(sum(1,4));


// callback function

// function cCompiler(){
//     return "cCompler selected";
// }

// function javaCompiler(){
//       return "javaCompiler selected";
// }

// function selectLanguage(click){
//     console.log("you have "+click);
// }

// selectLanguage(javaCompiler())  //you have javacompiler selected
// selectLanguage(javaCompiler)  
// //  you have function javaCompiler(){
// //     return "javaCompiler selected";
// // }



// dom - 

// console.log("hello world");  

// const div=document.getElementById('divname');
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES ENGINEERING COLLEGE";
// console.log(h1);
// div.appendChild(h1);
// // console.group(div)
// h1.style.backgroundColor="cyan";
// h1.style.margin="10px"


// const img=document.createElement('img');
// img.src="./cat.jpeg"
// console.log(img);
// div.appendChild(img);
// img.setAttribute("height","300");
// img.setAttribute("width","200px");


// function getdata(){
//    alert("you have submitted the data");
// }

// const button=getElementById('btn');
// console.log(button);
// button.addEventListener("click",getdata);

// const promises=new Promise((resolve,reject)=>{
//    let a=12;
//    if(a>10){
//       resolve("accepted");
//    }
//    else{
//       reject("not accepted");
//    }
// })

// promises.then((msg)=>{
//    console.log(msg);
// })
// .catch((error)=>{
//    console.log(error);
// })
// .finally(()=>{
//    console.log("All resources have been closed");
// })



// const promise2=new Promise((resolve,reject)=>{
//    resolve({name:"riya sharma" , stack:"Java"})
// });
// promise2.then((msg)=>{
//    console.log("inside loop")
// })
// .catch((error)=>{
//    console.log(error);
// })


const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
   console.log(data);
   data.json().then((res)=>{
      console.log(res);
   })
})