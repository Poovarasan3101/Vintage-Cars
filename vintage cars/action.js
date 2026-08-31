let top_cover=document.getElementById("top_black_cover")
setTimeout(()=>{
    top_cover.style.transform="translateY(-300px)"

},1000)
let bottom_cover=document.getElementById("bottom_black_cover")
setTimeout(()=>{
    bottom_cover.style.transform="translateY(400px)"
},1000)
setTimeout(()=>{
    bottom_cover.style.height="0px"
},2000)

let navbar_action=document.getElementById("navbar")
setTimeout(()=>{
    navbar_action.style.transform="translateY(0px)"

},1000)
let main_index_content=document.getElementById("main_index_page_content")
setTimeout(()=>{
    main_index_content.style.transform="translateX(500px)"

},1500)
// time 
let colose_or_open=document.getElementById("shop_open_or_close")
   let time=new Date()
   let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   let current_time=time.toLocaleTimeString()
   if(days[time.getDay()]=="Sunday"){
   colose_or_open.innerHTML=`${days[time.getDay()]} [Close]`
   }
   else{
   colose_or_open.innerHTML=`${days[time.getDay()]} [open]`
   }

   let customer_name=document.getElementById("name_cust")
   let customer_mail=document.getElementById("mail_cust")
   let customer_want_car=document.getElementById("model_cust")
   let customer_msg=document.getElementById("msg-box")
   let details_save_btn=document.getElementById("enqury_btn")

   details_save_btn.addEventListener("click",()=>{
    let customer_details={
        "Name":customer_name.value,
        "Email":customer_mail.value,
        "Car_Model":customer_want_car.value,
        "Message":customer_msg.value}
        console.log(customer_details)
        // localStorage.setItem("Name",customer_details.Name)
        // localStorage.setItem("Email",customer_details.Email)
        // localStorage.setItem("Car Model",customer_details.Car_Model)
        // localStorage.setItem("Message",customer_details.Message)

   })
// let clear_btn=document.getElementById("clera")
//  clear_btn.addEventListener('click',()=>{
// localStorage.removeItem("Name")
// localStorage.removeItem("Email")
// localStorage.removeItem("Car Model")
// localStorage.removeItem("Message")

// window.location.href="admin.html"

//  })

        





