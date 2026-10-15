// Hand-drawn 5x7 bitmap glyphs. Add more characters here as needed.
const GLYPHS = {
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  a: ["00000", "00000", "01110", "00001", "01111", "10001", "01111"],
  h: ["10000", "10000", "10110", "11001", "10001", "10001", "10001"],
  i: ["00100", "00000", "01100", "00100", "00100", "00100", "01110"],
  m: ["00000", "00000", "11010", "10101", "10101", "10001", "10001"],
  r: ["00000", "00000", "10110", "11001", "10000", "10000", "10000"],
  s: ["00000", "00000", "01111", "10000", "01110", "00001", "11110"],
  u: ["00000", "00000", "10001", "10001", "10001", "10011", "01101"],
  w: ["00000", "00000", "10001", "10001", "10101", "10101", "01010"],
  " ": ["000", "000", "000", "000", "000", "000", "000"],
};

function layout(text) {
  const pixels = [];
  let x = 0;
  for (const ch of text) {
    const glyph = GLYPHS[ch] ?? GLYPHS[" "];
    glyph.forEach((row, y) => {
      [...row].forEach((bit, dx) => {
        if (bit === "1") pixels.push({ x: x + dx, y });
      });
    });
    x += glyph[0].length + 1;
  }
  return { pixels, width: x - 1 };
}

export default function BitmapText({ text, color = "#1D1A2F", shadowColor, className = "", title }) {
  const { pixels, width } = layout(text);
  const shadow = shadowColor ? 0.5 : 0;

  return (
    <svg
      viewBox={`0 0 ${width + shadow} ${7 + shadow}`}
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label={title ?? text}
    >
      {shadow > 0 &&
        pixels.map((p, i) => (
          <rect key={`s${i}`} x={p.x + shadow} y={p.y + shadow} width="1" height="1" fill={shadowColor} />
        ))}
      {pixels.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width="1.02" height="1.02" fill={color} />
      ))}
    </svg>
  );
}
