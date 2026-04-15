import { AiFrameworkDiagram } from './AiFrameworkDiagram'

export const AiFrameworkSection = () => (
  <section id='framework' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·05 · The Framework</div>
        <h2>
          The stack we build on.{' '}
          <em>Human-led, agent-operated, data-powered.</em>
        </h2>
        <p className='lead'>
          Four layers. One continuous system. Strategy sets direction. Cloud
          gives it a floor. Development turns it into software. Productivity
          puts it to work.
        </p>
      </div>
      <AiFrameworkDiagram />
    </div>
  </section>
)
