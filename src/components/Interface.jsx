import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
      <div className="interface-buttons">
        <h2>Fox actions: </h2>
        {animations.map((animation, index) => (
          <button
            key={animation}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </button>
        ))}
      </div>
  );
};

export default Interface;
