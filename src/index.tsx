import React, { useEffect, useRef, useCallback } from "react";

class CoolChar {
  x: number;
  y: number;
  text: string;
  fontSize: number;
  characters: string;
  canvasWidth: number;
  canvasHeight: number;

  constructor(
    x: number,
    y: number,
    fontSize: number,
    characters: string,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.characters = characters;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw(context: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  canvasWidth: number;
  canvasHeight: number;
  fontSize: number;
  columns: number;
  chars: CoolChar[];
  characters: string;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    fontSize: number,
    characters: string
  ) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = fontSize;
    this.columns = this.canvasWidth / this.fontSize;
    this.chars = [];
    this.characters = characters;

    // call when class constructed
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.chars[i] = new CoolChar(
        i,
        0,
        this.fontSize,
        this.characters,
        this.canvasWidth,
        this.canvasHeight
      );
    }
  }

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.chars = [];
    this.initialize();
  }
}

const myChars =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface IMyProps extends React.HTMLAttributes<HTMLCanvasElement> {
  fps?: number;
  fontSize?: number;
  color?: string;
  bgColor?: string;
  characters?: string;
  width?: number;
  height?: number;
}

const ReMatrix: React.FC<IMyProps> = ({
  fps = 60,
  fontSize = 15,
  color = "#03A062",
  bgColor = "rgba(0, 0, 0, 0.065)",
  characters = myChars,
  width,
  height,
  ...rest
}): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const effectRef = useRef<Effect | null>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const timer = useRef<number>(0);

  const nextFrame = 1000 / fps;

  const animate = useCallback(
    (timeStamp: number) => {
      let deltaTime = 0;

      deltaTime = timeStamp - previousTimeRef.current;

      previousTimeRef.current = timeStamp;

      if (timer.current > nextFrame) {
        if (canvasRef.current && contextRef.current) {
          contextRef.current.fillStyle = bgColor;
          contextRef.current.textAlign = "center";
          contextRef.current.fillRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          contextRef.current.fillStyle = color;
        }

        if (effectRef.current) {
          effectRef.current.chars.forEach(char => {
            if (contextRef.current) char.draw(contextRef.current);
          });
        }

        timer.current = 0;
      } else {
        timer.current += deltaTime;
      }

      requestRef.current = requestAnimationFrame(animate);
    },
    [color, bgColor, nextFrame]
  );

  useEffect(() => {
    timer.current = 0;

    const canvas = canvasRef.current;

    if (canvas) {
      canvas.width = width || window.innerWidth;
      canvas.height = height || window.innerHeight;

      effectRef.current = new Effect(
        canvas.width,
        canvas.height,
        fontSize,
        characters
      );

      const context = canvas.getContext("2d");
      if (context) {
        contextRef.current = context;
        context.font = `${effectRef.current.fontSize}px monospace`;
      }
    }

    requestRef.current = requestAnimationFrame(animate);
    if (canvas && contextRef.current)
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);

    return () => {
      return cancelAnimationFrame(requestRef.current);
    };
  }, [animate, characters, fontSize, height, width]);

  useEffect(() => {
    const resize = () => {
      if (canvasRef.current && effectRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        effectRef.current.resize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} {...rest} />;
};

export default ReMatrix;
