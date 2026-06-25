'use client';

import {
  TrendingUp,
  Building2,
  Gift,
  Lightbulb,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


const ITEMS = [
  {
    id:1,
    title:'Professional Growth',
    description:
      'Continuous learning and career advancement opportunities.',
    icon:TrendingUp,
  },
  {
    id:2,
    title:'Industry Projects',
    description:
      'Work on major infrastructure and engineering projects.',
    icon:Building2,
  },
  {
    id:3,
    title:'Competitive Packages',
    description:
      'Attractive compensation and benefits.',
    icon:Gift,
  },
  {
    id:4,
    title:'Innovative Environment',
    description:
      'Collaborative culture focused on excellence.',
    icon:Lightbulb,
  },
];


export function WhyWorkWithUs(){

return (

<section className="section-padding bg-background">

<div className="container-xl">


<FadeIn className="text-center max-w-3xl mx-auto mb-16">


<SectionLabel>
Careers
</SectionLabel>


<SectionTitle className="mt-5 mb-6">

Why Work With

<span className="text-gradient-gold">
 {' '}AZAL
</span>

</SectionTitle>


<GoldLine className="mx-auto"/>


<p

className="
mt-6
text-text-muted
leading-relaxed
"

>

Join a professional engineering environment
built around innovation, safety, and continuous development.

</p>


</FadeIn>





<StaggerContainer

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"

staggerDelay={0.1}

>


{ITEMS.map((item)=>{


const Icon=item.icon;


return (

<StaggerItem key={item.id}>


<article

className="
group
relative
bg-white
border
border-border
p-7
h-full
overflow-hidden
hover:shadow-xl
transition-all
duration-500
"

>


<div

className="
absolute
top-0
left-0
h-1
w-0
bg-accent
group-hover:w-full
transition-all
duration-700
"

/>



<div

className="
w-12
h-12
bg-primary
flex
items-center
justify-center
mb-6
"

>


<Icon

size={22}

className="text-white"

/>


</div>




<h3

className="
font-bold
text-primary
text-lg
mb-3
group-hover:text-accent
transition-colors
"

>

{item.title}

</h3>



<p

className="
text-text-muted
text-sm
leading-relaxed
"

>

{item.description}

</p>



</article>



</StaggerItem>


)


})}


</StaggerContainer>



</div>


</section>


)

}