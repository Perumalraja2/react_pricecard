import React from 'react';
import Card from './components/card';
function App() {
let data =[{
plan:"FREE",
price:"0",
user:"Single User",
userenable:true,
storage:"5GB Storage",
storageenable:true,
projects:"Community Access",
projectsenable:true,
access:"Unlimted private projects",
accessenable:false,
support:"Dedicated Phone support",
supportenable:false,
subdomain:"Free subdomain",
subdomainenable:false,
report:"Monthly Status Reports",
reportenable:false,
},
{
  plan:"PLUS",
  price:"9",
  user:"5 User",
userenable:true,
storage:"50GB Storage",
storageenable:true,
projects:"Community Access",
projectsenable:true,
access:"Unlimted private projects",
accessenable:true,
support:"Dedicated Phone support",
supportenable:true,
subdomain:"Free subdomain",
subdomainenable:true,
report:"Monthly Status Reports",
reportenable:false,
  },
  {
    plan:"PRO",
    price:"49",
    user:"Unlimited User",
userenable:true,
storage:"150GB Storage",
storageenable:true,
projects:"Community Access",
projectsenable:true,
access:"Unlimted private projects",
accessenable:true,
support:"Dedicated Phone support",
supportenable:true,
subdomain:"Free subdomain",
subdomainenable:true,
report:"Monthly Status Reports",
reportenable:true,
    }
]
return <>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
      return< Card key={i}
          data={e}  
      />
      
})
     }
      
   </div>
  </div>
</section>
 
  </>
}

export default App;
