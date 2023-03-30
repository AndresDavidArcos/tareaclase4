import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
      <>
        {animations.map((animation, index) => (
          <button
            key={animation}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </button>
        ))}
      </>
  );
};

export default Interface;
