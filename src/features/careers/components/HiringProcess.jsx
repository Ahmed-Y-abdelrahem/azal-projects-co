'use client';

import {
  FileText,
  Search,
  Wrench,
  Users,
  CheckCircle,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


const STEPS = [
  {
    id:1,
    title:'Application Submission',
    description:
      'Submit your application and share your professional profile.',
    icon:FileText,
  },
  {
    id:2,
    title:'CV Screening',
    description:
      'Our team reviews your experience and qualifications.',
    icon:Search,
  },
  {
    id:3,
    title:'Technical Interview',
    description:
      'Assessment of technical skills and engineering knowledge.',
    icon:Wrench,
  },
  {
    id:4,
    title:'Final Interview',
    description:
      'Discussion with management and project teams.',
    icon:Users,
  },
  {
    id:5,
    title:'Offer & Onboarding',
    description:
      'Welcome to AZAL and start your professional journey.',
    icon:CheckCircle,
  },
];


export function HiringProcess(){

return (

<section className="section-padding bg-background">


<div className="container-xl">



<FadeIn className="text-center max-w-3xl mx-auto mb-16">


<SectionLabel>
Recruitment Journey
</SectionLabel>



<SectionTitle className="mt-5 mb-6">

Our Hiring

<span className="text-gradient-gold">
 {' '}Process
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

A simple and transparent process designed to
identify talented professionals and build a strong team.

</p>


</FadeIn>





<StaggerContainer

className="
grid
md:grid-cols-2
lg:grid-cols-5
gap-6
"

staggerDelay={0.1}

>



{STEPS.map((step)=>{


const Icon=step.icon;


return (

<StaggerItem key={step.id}>


<article

className="
group
relative
bg-white
border
border-border
p-7
text-center
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
w-0
h-1
bg-accent
group-hover:w-full
transition-all
duration-700
"

/>





<div

className="
w-14
h-14
mx-auto
bg-primary
flex
items-center
justify-center
mb-6
"

>


<Icon

size={24}

className="text-white"

/>


</div>





<div

className="
text-accent
text-3xl
font-bold
mb-3
"

>

0{step.id}

</div>





<h3

className="
font-bold
text-primary
mb-3
text-sm
uppercase
tracking-wide
"

>

{step.title}

</h3>





<p

className="
text-text-muted
text-xs
leading-relaxed
"

>

{step.description}

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