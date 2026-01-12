import dynamic from 'next/dynamic';
// Using the '@' alias is safer than '../'
import Hero from '@/components/home/Hero';
import Loader from '@/components/common/Loader';

// Dynamic imports pointing to components/home/
const WhatWeDeliver = dynamic(() => import('@/components/home/WhatWeDeliver'), {
  loading: () => <Loader />,
});

const NoticeEvents = dynamic(() => import('@/components/home/NoticeEvents'), {
  loading: () => <Loader />,
});

const Stats = dynamic(() => import('@/components/home/Stats'), {
  loading: () => <Loader />,
});

const PrincipalMessage = dynamic(() => import('@/components/home/PrincipalMessages'), {
  loading: () => <Loader />,
});

const Partners = dynamic(() => import('@/components/home/Partners'), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <>
      {/* Hero loads instantly (Server Component) */}
      <Hero />

      {/* The rest load lazily (Client chunks) */}
      <section id="deliver">
        <WhatWeDeliver />
      </section>

      <section id="notices">
        <NoticeEvents />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="principal-message">
        <PrincipalMessage />
      </section>

      <section id="partners">
        <Partners />
      </section>
    </>
  );
}