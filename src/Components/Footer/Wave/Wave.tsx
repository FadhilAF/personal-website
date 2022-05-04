import  './Wave.css';
import useIfPhone from '../../CustomHooks/useIsPhone';

function Wave() {
  const isPhone = useIfPhone();

  if (isPhone) {
      return <svg id="visual" viewBox="0 0 540 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 52L22.5 48C45 44 90 36 135 35.8C180 35.7 225 43.3 270 48.7C315 54 360 57 405 54.8C450 52.7 495 45.3 517.5 41.7L540 38L540 101L517.5 101C495 101 450 101 405 101C360 101 315 101 270 101C225 101 180 101 135 101C90 101 45 101 22.5 101L0 101Z" strokeLinecap="round" strokeLinejoin="miter"></path></svg>;
  } else {
      return <svg id="visual" viewBox="0 0 960 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 80L22.8 71.8C45.7 63.7 91.3 47.3 137 45.8C182.7 44.3 228.3 57.7 274 67.7C319.7 77.7 365.3 84.3 411.2 75C457 65.7 503 40.3 548.8 35.5C594.7 30.7 640.3 46.3 686 53C731.7 59.7 777.3 57.3 823 47.7C868.7 38 914.3 21 937.2 12.5L960 4L960 101L937.2 101C914.3 101 868.7 101 823 101C777.3 101 731.7 101 686 101C640.3 101 594.7 101 548.8 101C503 101 457 101 411.2 101C365.3 101 319.7 101 274 101C228.3 101 182.7 101 137 101C91.3 101 45.7 101 22.8 101L0 101Z" strokeLinecap="round" strokeLinejoin="miter"></path></svg>;
  }
}

export default Wave;