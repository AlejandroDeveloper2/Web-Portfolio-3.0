import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import { getParticlesOptions } from "./fuctions";
import { useThemeContext } from "@hooks/index";

const ParticlesBg = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getParticlesOptions(colorPattle)}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ParticlesBg;
