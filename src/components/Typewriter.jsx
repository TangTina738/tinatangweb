// TestTypewriter.jsx
import { Typewriter } from 'react-simple-typewriter';

export default function TestTypewriter() {
  return (
    <div style={{ fontSize: '24px', color: 'black', margin: '50px' }}>
      <Typewriter
        words={['Hello', 'World']}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
