import React, { useEffect, useState } from 'react';

const Canvas = () => {
  const [count, setCount] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [boxxpos, setBoxXpos] = useState(100);
  const [truckpos, setTruckPos] = useState(0);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    setCanvas(canvas);
  }, []);

  const drawRoad = (roadxpos, roadYpos, roadwidth) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'gray';
    ctx.fillRect(roadxpos, roadYpos, roadwidth, canvas.height);
  };

  const drawBack = () => {
    const ctx = canvas.getContext('2d');
    const background = new Image();
    background.src = 'https://source.unsplash.com/1600x900/?nature';
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  };

  const drawBox = () => {
    const ctx = canvas.getContext('2d');
    const box = new Image();
    box.src = 'https://source.unsplash.com/100x100/?delivery';
    ctx.drawImage(box, boxxpos, 170, 30, 30);
  };

  const drawTruck = () => {
    const ctx = canvas.getContext('2d');
    const truck = new Image();
    truck.src = 'https://source.unsplash.com/100x100/?truck';
    ctx.drawImage(truck, 350 + truckpos, 150, 100, 100);
  };

  const boxUpdate = () => {
    setBoxXpos(boxxpos + 1);
  };

  const truckposupdate = () => {
    setTruckPos(truckpos + 1);
  };

  const updateBlocks = () => {
    if (count % 30 === 0 && boxxpos > 350 && count < 500) {
      const r1 = { xpos: 535, ypos: 170, width: 3, height: 40 };
      setBlocks(blocks.concat(r1));
    }

    setBlocks(
      blocks.map((block) => {
        block.xpos -= 1;
        return block;
      })
    );
  };

  const animate = () => {
    requestAnimationFrame(animate);
    setCount(count + 1);
    if (count > 500) {
      const ctx = canvas.getContext('2d');
      const completed = new Image();
      completed.src = 'https://source.unsplash.com/50x50/?check';
      ctx.drawImage(completed, 390, 150, 50, 50);
      return;
    }
    drawRoad(0, 0, 50);
    drawBack();
    if (count < 300) {
      boxUpdate();
    } else if (count > 300) {
      truckposupdate();
    }
    updateBlocks();
    drawBox();
    drawTruck();
  };

  return <canvas width="800" height="400" />;
};

export default Canvas;
