export const Candle = ({
  bodyHeight = 40,   // body height
  bodyWidth = 12,    // body width
  wickTop = 20,      // wick above body
  wickBottom = 20,   // wick below body
  bullish = true,    // green if bullish, red if bearish
  color='bg-amber-400',             // optional custom Tailwind color
  opacity = 1,       // opacity (0–1 range for precision)
  top = 0,           // absolute top position
  left = 0           // absolute left position
}) => {
  const candleColor = color || (bullish ? "bg-green-500" : "bg-red-500");

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        top,
        left,
        opacity,
      }}
    >
      {/* Top wick */}
      <div
        className={` ${candleColor}`}
        style={{ height: wickTop, width: 1 }}
      ></div>

      {/* Candle body */}
      <div
        className={` ${candleColor}`}
        style={{ height: bodyHeight, width: bodyWidth }}
      ></div>

      {/* Bottom wick */}
      <div
        className={`relative ${candleColor}`}
        style={{ height: wickBottom, width: 1 }}
      ></div>
    </div>
  );
};