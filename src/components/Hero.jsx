import { curve } from "../assets";
import Button from "./Button";
import Section from "./section";

export default function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25]rem"
      customPaddings
      id="Hero"
    >
      Hero
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 ">
          <h1 className="h1 mb-6">
            Explore The Possibility Of AI Chatting With BrainWave
          <span className="inline-block relative">
            BrainWave
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
            width={624}
            height={28}
            alt="curve"
            />
          </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">

          </div>
        </div>
      </div>
    </Section>
  );
}
