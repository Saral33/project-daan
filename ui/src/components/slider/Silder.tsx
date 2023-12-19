import * as Slider from '@radix-ui/react-slider';
import '../../styles/slider.css';

type SliderProps = {
  disabled?: boolean;
  max: number;
  defaultVal: number;
};
const Silder = ({ disabled = true, max, defaultVal }: SliderProps) => {
  return (
    <Slider.Root
      disabled={disabled}
      className="SliderRoot"
      defaultValue={[defaultVal]}
      max={max}
      step={1}
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  );
};

export default Silder;
