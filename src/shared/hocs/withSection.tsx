import React, { forwardRef, Ref } from 'react';
import { SectionProps } from 'shared/interfaces';
import 'pages/HomePage/home.sass';

export default function WithSection(WrappedComponent: React.FC<SectionProps>) {
  return forwardRef((props: SectionProps, ref: Ref<HTMLDivElement>) => (
    <section className="section" ref={ref}>
      <WrappedComponent {...props} />
    </section>
  ));
}
