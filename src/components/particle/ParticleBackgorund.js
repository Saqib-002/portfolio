import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particles_object from "../../assets/particlesConfig";
import "./ParticleBackground.css"

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
      <Particles
        height="100vh"
        width="110vw"
        id="tsparticles"
        init={particlesInit}
        options={particles_object}
      />
  );
};

export default ParticleBackground;
