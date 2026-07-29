// @flow strict

function CaseStudySection({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative z-50 my-16 lg:my-28 ${className}`}>
      {children}
    </section>
  );
}

export default CaseStudySection;