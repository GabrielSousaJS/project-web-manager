import { AboutUs } from "./AboutUs";
import { Simulation } from "./Simulation";
import { Form } from "./Form";
import { HomeStepByStep } from "./HomeStepByStep";
import { HomeHowItWorks } from "./HomeHowItWorks";
import { Capitation } from "./Capitation";
import { ClearUpDoubts } from "./ClearUpDoubts";
import { WhyInvest } from "./WhyInvest";
import { Footer } from "./Footer";

export function Home() {
  return (
    <>
      <Form />
      <AboutUs />
      <Simulation />
      <HomeStepByStep />
      <HomeHowItWorks />
      <Capitation />
      <ClearUpDoubts />
      <WhyInvest />
      <Footer />
    </>
  );
}