let data=[
    {
        img:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221376M213006_1.jpg",
        name:"BURBERRY",
        type:"Cotton T-shirt With Bicolor Print - Atterley In White Multi",
        price:`$${652}` ,
        store: "15 store" 
    },
    {
        img:"https://cdn-images.farfetch-contents.com/17/40/38/38/17403838_36824857_1000.jpg",
        name:"DOLCE & GABBANA",
        type:"Stretch Technical Jersey T-shirt With Print In White",
        price:`$${695}`,
        store: "7 Store"    
    },
    {
        img:"https://cdn.modesens.com/availability/49198536?w=400&",
        name:"MARNI",
        type:"Floral-stripes Bowling Shirt In Inr Lacquer",
        price:`$${709}`,
        store: "6 Store"    
    },

    {
        img:"https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/6d25072487bc852065d96d76f4224a45.jpg",
        name:"VERSACE",
        type:"Blue Other Materials T-shirts",
        price:`$${513}`,
        store: "7 Store"    
    },
    {
        img:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221249M213023_1.jpg",
        name:"JIL SANDER",
        type:"Stretch Technical Jersey T-shirt With Print In White",
        price:`$${695 }`,
        store: "17 Store"    
    },
    {
        img:"https://media.bergdorfgoodman.com/f_auto,q_auto,b_auto,c_pad/01/bg_4154157_100106_m",
        name:"DOLCE & GABBANA",
        type:"Camouflage Heart T-shirt",
        price:`$${665}`,
        store: "9 Store"    
    },
    {
        img:"https://atterley-core-staging.s3-eu-west-1.amazonaws.com/productImages/2021/12/9cacb01356a84f79a1c91a5bb7f3b031_1640726663.jpg",
        name:"ERMENEGILDO ZEGNA",
        type:"Mens Luxurious Henley T-shirt i Black",
        price:`$${280} `,
        store: "3 Store"    
    },
    {
        img:"https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/e3c575e05aa8522cf9b24bb2fa48b8bc.jpg",
        name:"VALENTINO",
        type:"Padded Emboses Logo T-shirt",
        price:`$${558}`,
        store: "3 Store"    
    },
    {
        img:"https://cdn.modesens.com/availability/47397613?w=400&",
        name:"DOLCE & GABBANA",
        type:"Dolce & Gabbana Martini In Black",
        price:`${1239} `,
        store: "2 Store"    
    },
    {
        img:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212404M213059_1.jpg",
        name:"DOLCE & GABBANA",
        type:"Stretch Technical Jersey T-shirt With Print In White",
        price:`$${467 }`,
        store: "7 Store"    
    },
    {
        img:"https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/b4976683077b968c54730808906753a2.jpg",
        name:"VARSACHE",
        type:"COtton with Jersey T-shirt With Print In Black",
        price:`$${350 }`,
        store: "3 Store"    
    },
    {
        img:"https://catalog-resize-images.thedoublef.com/resize/800/800/JSMT705011MT247608_J_JILSA-402.a.jpg",
        name:"BURBERRY",
        type:"Burberry Checked Print Shirt In Multi",
        price:`${675}`,
        store: "1 Store"    
    },
    {
        img:"https://cdn.modesens.com/availability/44315923?w=400&",
        name:"DOLCE & GABBANA",
        type:"T-SHirt With Nylon Insserts In Black",
        price:`$${985} `,
        store: "1 Store"    
    },
    {
        img:"https://cdn.modesens.com/availability/46728368?w=400&",
        name:"JIL SANDER",
        type:"DArk Blue T-shirts",
        price:`$${695} `,
        store: "7 Store"    
    },


    {
        img:"https://cdn.modesens.com/availability/47193785?w=400&",
        name:"MARNI",
        type:"Floral-stripes Bowling Shirt In Inr Lacquer",
        price:` $${709}`,
        store: "6 Store"    
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0274/7695/1137/products/34a99864a835ffa44725a9c7b4e11d08.jpg",
        name:"VERSACE",
        type:"Blue Other Materials T-shirts",
        price:`$${513} `,
        store: "7 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/22417304_3?w=400&",
        name:"JIL SANDER",
        type:"Stretch Technical Jersey T-shirt With Print In White",
        price:` $${695}`,
        store: "17 Store"    
    },
    {
        img:"https://cdn-images.farfetch-contents.com/17/30/90/84/17309084_35733821_1000.jpg",
        name:"DOLCE & GABBANA",
        type:"Camouflage Heart T-shirt",
        price:`$${665} `,
        store: "9 Store"    
    },
    {
        img:"https://cdn-images.farfetch-contents.com/17/03/43/12/17034312_34167108_1000.jpg",
        name:"ERMENEGILDO ZEGNA",
        type:"Mens Luxurious Henley T-shirt i Black",
        price:`$${280 }`,
        store: "3 Store"    
    },
    {
        img:"https://cdn-images.farfetch-contents.com/16/06/35/51/16063551_31414014_1000.jpg",
        name:"VALENTINO",
        type:"Padded Emboses Logo T-shirt",
        price:`$${558}`,
        store: "3 Store"    
    },

]

let showdata=(data)=>{
    let box=document.getElementById("box")
    data.map((el)=>{
      let div=document.createElement("div")

      let img=document.createElement("img")
      img.src=el.img;

      let name=document.createElement("h2")
      name.innerText=el.name;

      let type=document.createElement("h4")
      type.innerText=el.type;
      type.style.color="grey";

      let price=document.createElement("h4")
      price.innerText=el.price;

      let button=document.createElement("button")
      button.innerText="View Product"
      button.addEventListener("click",function(){
        addtocart()
      })
      

      div.append(img,name,type,price,button)
      box.append(div)
     let arr=[]
      function addtocart(){
        arr.push(el)
        localStorage.setItem("product",JSON.stringify(arr))
        window.location.href="cart.html"
         }

    })
  }
  showdata(data)