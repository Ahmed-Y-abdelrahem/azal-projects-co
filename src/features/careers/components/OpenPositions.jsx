'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

import { JOBS } from '@/data/jobs';


export function OpenPositions(){

return (

<section className="section-padding bg-background">


<div className="container-xl">



<FadeIn className="max-w-3xl mb-16">


<SectionLabel>
Career Opportunities
</SectionLabel>



<SectionTitle className="mt-5 mb-6">

Open

<span className="text-gradient-gold">
 {' '}Positions
</span>


</SectionTitle>



<GoldLine />



<p

className="
mt-6
text-text-muted
leading-relaxed
"

>

Join AZAL Projects and become part of a professional
engineering team delivering major infrastructure solutions.

</p>


</FadeIn>





<StaggerContainer

className="
space-y-5
"

staggerDelay={0.1}

>


{JOBS.map((job)=>{


return (


<StaggerItem key={job.slug}>


<article

className="
group
relative
bg-white
border
border-border
p-8
flex
flex-col
lg:flex-row
lg:items-center
justify-between
gap-6
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




<div>


<h3

className="
text-xl
font-bold
text-primary
mb-4
group-hover:text-accent
transition-colors
"

>

{job.title}

</h3>



<div

className="
flex
flex-wrap
gap-5
text-sm
text-text-muted
"

>


<span

className="
flex
items-center
gap-2
"

>

<MapPin size={16}/>

{job.location}

</span>



<span

className="
flex
items-center
gap-2
"

>

<Briefcase size={16}/>

{job.type}

</span>



</div>


</div>





<Link

href={`/careers/${job.slug}`}

className="
inline-flex
items-center
gap-3
text-primary
font-semibold
text-sm
uppercase
tracking-wider
group-hover:text-accent
transition-colors
"

>

View Position


<ArrowRight

size={16}

className="
group-hover:translate-x-1
transition-transform
"

/>


</Link>



</article>



</StaggerItem>


)


})}


</StaggerContainer>




</div>


</section>


)

}