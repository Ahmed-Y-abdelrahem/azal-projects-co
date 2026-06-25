'use client';

import {
  WalletCards,
  TrendingUp,
  HeartPulse,
  CalendarDays,
  GraduationCap,
  Award,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


const BENEFITS = [
  {
    id:1,
    title:'Competitive Salary',
    description:
      'Attractive compensation packages aligned with industry standards.',
    icon:WalletCards,
  },
  {
    id:2,
    title:'Career Development',
    description:
      'Opportunities to grow professionally within AZAL.',
    icon:TrendingUp,
  },
  {
    id:3,
    title:'Health Insurance',
    description:
      'Comprehensive healthcare support for employees.',
    icon:HeartPulse,
  },
  {
    id:4,
    title:'Annual Leave',
    description:
      'Balanced work environment with proper employee benefits.',
    icon:CalendarDays,
  },
  {
    id:5,
    title:'Training Programs',
    description:
      'Continuous technical learning and development.',
    icon:GraduationCap,
  },
  {
    id:6,
    title:'Performance Bonuses',
    description:
      'Recognition and rewards based on achievements.',
    icon:Award,
  },
];


export function BenefitsSection(){

return (

<section className="section-padding bg-white">


<div className="container-xl">



<FadeIn className="text-center max-w-3xl mx-auto mb-16">


<SectionLabel>
Employee Benefits
</SectionLabel>



<SectionTitle className="mt-5 mb-6">

Supporting Our

<span className="text-gradient-gold">
 {' '}People
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

We invest in our team by providing a professional
environment focused on growth, stability, and excellence.

</p>


</FadeIn>





<StaggerContainer

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"

staggerDelay={0.1}

>


{BENEFITS.map((item)=>{


const Icon=item.icon;


return (


<StaggerItem key={item.id}>


<article

className="
group
relative
bg-background
border
border-border
p-7
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
text-primary
font-bold
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