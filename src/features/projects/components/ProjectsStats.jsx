'use client';

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


const stats = [
  {
    number:'150+',
    label:'Projects Delivered',
  },
  {
    number:'12+',
    label:'Years Experience',
  },
  {
    number:'100%',
    label:'Safety Commitment',
  },
  {
    number:'500+',
    label:'Engineering Solutions',
  },
];


export function ProjectsStats(){


return (

<section className="section-padding bg-primary">


<div className="container-xl">


<FadeIn className="text-center mb-14">


<h2

className="
font-display
text-4xl
font-bold
text-white
"
>

Proven Project
<span className="text-accent">
 {' '}Performance
</span>

</h2>


</FadeIn>



<StaggerContainer

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{stats.map((item)=>{


return (

<StaggerItem key={item.label}>


<div

className="
text-center
border
border-white/10
bg-white/5
p-8
hover:bg-white/10
transition-all
duration-500
"

>


<h3

className="
text-5xl
font-bold
text-accent
mb-3
"

>

{item.number}

</h3>



<p

className="
text-white/70
uppercase
tracking-[0.2em]
text-xs
"

>

{item.label}

</p>


</div>


</StaggerItem>


)


})}



</StaggerContainer>


</div>


</section>

)

}