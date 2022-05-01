let data=[
    {
        img:"https://cdn.modesens.com/product/10301703_16?w=400&",
        name:"NATURA BISSE",
        type:"DIamond Cocoon Skin Booster Concentrate In White",
        price:`$${310}` ,
        store: "15 store" 
    },
    {
        img:"https://cdn.modesens.com/product/10301894_34?w=400&",
        name:"NATURA BISSE",
        type:"C+c Vitamin Souffle Mask (2.5 Oz.) In White",
        price:` $${52}
        `,
        store: "8 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/11709840_52?w=400&",
        name:"NATURA BISSÉ",
        type:"Diamond Cocoon Ultra Rich Cream (1.7 Fl. Oz.) In White",
        price:`$${386}`,
        store: "6 Store"    
    },

    {
        img:"https://s4.thcdn.com/productimg/600/600/10364180-2124493647703631.jpg",
        name:"DERMALOGICA",
        type:"- Skin Hydrating Booster 30ml/1oz In N,a",
        price:`$${80}  `,
        store: "4 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/10301008_57?w=400&",
        name:"NATURA BISSÉ",
        type:"Diamond Drops, 0.84 Oz. In Multi",
        price:`$${210}
        `,
        store: "6 Store"    
    },
    {
        img:"https://www.net-a-porter.com/variants/images/17957409494836263/in/w1000.jpg",
        name:"NATURA BISSÉ",
        type:"Diamond Instant Glow (12 Ampoules) In Multi",
        price:`$${95} `,
        store: "3 Store"    
    },
    {
        img:"https://www.net-a-porter.com/variants/images/665933301478564/in/w1000.jpg",
        name:"ERMENEGILDO ZEGNA",
        type:"DIamond Cocoon Skin Booster Concentrate In White",
        price:`$${280} `,
        store: "3 Store"    
    },
    {
        img:"https://i1.adis.ws/i/liberty/000620228-R270385006-1?$large$",
        name:"DIOR",
        type:"- Skin Hydrating Booster 30ml/1oz In N,a",
        price:` $${558} `,
        store: "3 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/19988551_7?w=400&",
        name:"DIOR",
        type:"C+c Vitamin Souffle Mask (2.5 Oz.) In White",
        price:`$${1158} `,
        store: "2 Store"    
    },
    {
        img:"https://s4.thcdn.com//productimg/1600/1600/13208027-2064901101952424.jpg",
        name:"DERMALOGICA",
        type:"DIamond Cocoon Skin Booster Concentrate In White",
        price:`$${467} `,
        store: "7 Store"    
    },
    {
        img:"https://s4.thcdn.com//productimg/600/600/12706873-1394810155060939.jpg",
        name:"DECORTE",
        type:"Diamond Cocoon Ultra Rich Cream (1.7 Fl. Oz.) In White",
        price:`$${350} `,
        store: "3 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/20315626_6?w=400&",
        name:"NATURAL BISSE",
        type:"- Skin Hydrating Booster 30ml/1oz In N,a",
        price:`$${675 }`,
        store: "1 Store"    
    },
    {
        img:"https://s4.thcdn.com//productimg/1600/1600/12949010-1444867677169722.jpg",
        name:"DECORTE",
        type:"T-SHirt With Nylon Insserts In Black",
        price:` $${985} `,
        store: "1 Store"    
    },
    {
        img:"https://image.harrods.com/16/73/52/68/16735268_32824726_800.jpg",
        name:"AERIN",
        type:"DIamond Cocoon Skin Booster Concentrate In White",
        price:`$${780 } `,
        store: "7 Store"    
    },


    {
        img:"https://cdn.modesens.com/product/19341865_6?w=400&",
        name:"JANE IREDALE",
        type:"Diamond Cocoon Ultra Rich Cream (1.7 Fl. Oz.) In White",
        price:`$${709}`,
        store: "6 Store"    
    },

    {
        img:"https://images.selfridges.com/is/image/selfridges/359-84011246-F007068000_M?$CHANNEL_INTELLIGENCE$",
        name:"DIOR",
        type:"C+c Vitamin Souffle Mask (2.5 Oz.) In White",
        price:` $${513}`,
        store: "7 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/13048454_4?w=400&",
        name:"SALVATORE FERRAGAMO",
        type:"Diamond Cocoon Ultra Rich Cream (1.7 Fl. Oz.) In White",
        price:` $${695}`,
        store: "17 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/6887179_23?w=400&",
        name:"DIOR",
        type:"- Skin Hydrating Booster 30ml/1oz In N,a",
        price:` $${665} `,
        store: "9 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/6727644_147?w=400&",
        name:"NATURAL BISSE",
        type:"C+c Vitamin Souffle Mask (2.5 Oz.) In White",
        price:` $${213}`,
        store: "3 Store"    
    },
    {
        img:"https://cdn.modesens.com/product/6727805_64?w=400&",
        name:"SALVATORE FERRAGAMO",
        type:"Diamond Cocoon Ultra Rich Cream (1.7 Fl. Oz.) In White",
        price:` $${580}`,
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