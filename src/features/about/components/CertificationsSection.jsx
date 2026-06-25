'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '../../../components/ui';

import { CERTIFICATIONS } from '@/data/certifications';



export function CertificationsSection() {

return (

<section className="section-padding bg-background">

<div className="container-xl">


<FadeIn className="text-center max-w-3xl mx-auto mb-20">


<SectionLabel>
Certifications & Compliance
</SectionLabel>


<SectionTitle className="mt-5 mb-6">

Standards We

<span className="text-gradient-gold">
Follow
</span>

</SectionTitle>


<GoldLine className="mx-auto"/>


<p className="
mt-7
text-text-muted
text-lg
leading-relaxed
">
Committed to maintaining international standards,
quality control, and safe engineering practices.
</p>


</FadeIn>





<StaggerContainer

className="
grid
md:grid-cols-2
gap-8
"

staggerDelay={0.1}

>


{CERTIFICATIONS.map((item)=>{


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
p-8
flex
gap-6
items-start
overflow-hidden
hover:shadow-2xl
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
w-14
h-14
shrink-0
bg-primary
flex
items-center
justify-center
"

>

<Icon
size={26}
className="text-white"
/>

</div>





<div>


<h3

className="
text-primary
font-bold
text-lg
mb-3
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


</div>



</article>


</StaggerItem>


)

})}



</StaggerContainer>


</div>

</section>

)

}