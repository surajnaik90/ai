# Understanding GPU

## Facts

- Photolithography : Billions of transistors are printed (patterned actually) on the silicon wafer.
  UV light is passed through Mask, Lens before printing it on the silicon wafer. [ASML company]
  Mask has in what pattern to print.

## Commom terminologies

- FP32 - Single precision floating point -  7 digits precision after decimal point
- FP64 - Double precision floating point -  15-17 digits precision after decimal point. 
        (double term becasue it is twice the size of FP32)
- TFLOP - Tera Floating Point Operations per second = 10^12 (1 trillion) operations / second
- Tensor Core: Processing unit to handle matrix operations.

## NVIDIA A100 GPU [Ampere Architecture]

- Thermal Design Power = 300 Watts
  This meaning a ceiling fan of 30W (Havells fan) running for 10hrs (whole night)
  would draw a same amount of power as that of NVIDIA A100 running for 1 hr at full power.


## NVIDIA H200 GPU [Hopper Architecture]

- Size (aaproximate) = 15cm X 15 cm, Weight = 2kg [It comes in system of 8 units and other variants]
- Used for training LLMs - GPT 5
- Cost: Approximate: Rs. 30lakh / GPU.
- Thermal design power = 700 Watts => 30 minutes of power drawn ~ 10 hr of 30W power drawn by a ceiling fan (aaproximate)
- It contains 80 billion transistors
- Gate length between source and drainer is not disclosed. It could be 15nm - 20nm

## Ampere vs Hopper Architecture

|  | Ampere | Hopper |
|------|------|------|
| Launch year | 2020 | 2022 |
| Built for | Traditional AI, High Performance Computing | AI, LLMs, Transformer architecture |
| Process Node technology | 7nm | 4nm |
| Transistor Count (B) | ~54 (approx) billion | 80 billion |
| Memory bandwidth | 2TB/sec | 3TB/sec |