import Hero from './components/Hero';
import ProblemIdentification from './components/ProblemIdentification';
import SolutionMechanism from './components/SolutionMechanism';
import DeliverablesStack from './components/DeliverablesStack';
import TransformationBenefits from './components/TransformationBenefits';
import PricingAnchor from './components/PricingAnchor';
import Guarantee from './components/Guarantee';
import FaqAndClosing from './components/FaqAndClosing';

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Hero />
      <ProblemIdentification />
      <SolutionMechanism />
      <DeliverablesStack />
      <TransformationBenefits />
      <PricingAnchor />
      <Guarantee />
      <FaqAndClosing />
    </div>
  );
}