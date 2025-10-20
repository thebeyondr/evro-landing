## Assets
Images are sliced from desktop view (1920px), all use background:cover and position: center center

!! Important
When use img-logo-pattern.png on the footer, please apply effect: Luminosity

## Full screen menu, background color transition

/* Smooth looping animation */
@keyframes colorShift {
  0% {
    background-color: #F5889B;
  }
  50% {
    background-color: #A081F5;
  }
  100% {
    background-color: #F5889B;
  }
}

/* Example element */
.div {
    width: 200px;
    height: 200px;
    background-color: #F5889B;
    animation: colorShift 4s infinite ease-in-out;
  }



## Button hover effect using tailwind css

<a href="#" class="hover:animate-bounce text-white font-bold py-2 px-4 rounded">Button text</a>



## text scale, this is an example, the actual value should refer to our design file

/* BODY TEXT STYLES (Rag) — matches Figma text tokens
   Sizes referenced at 1512px, scaling up to ~125% by 4K.
   All use: Light (300), 120% line-height, -2.2% tracking. */
   @layer utilities {
    /*
      Note: Do not set font-weight here so Tailwind utilities
      like `font-bold` and HTML <strong> can override weight.
      Default weight (Light 300) is applied on body.
    */
    .rag-xxs { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(10px, calc(8.38px + 0.107vw), 12.5px); }
    .rag-xs  { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(12px, calc(10.05px + 0.129vw), 15px); }
    .rag-sm  { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(14px, calc(11.73px + 0.150vw), 17.5px); }
    .rag-base{ line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(16px, calc(13.40px + 0.172vw), 20px); }
    .rag-md  { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(18px, calc(15.08px + 0.193vw), 22.5px); }
    .rag-lg  { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(20px, calc(16.75px + 0.215vw), 25px); }
    .rag-xl  { line-height: 1.2; letter-spacing: -0.022em; font-size: clamp(22px, calc(19.26px + 0.247vw), 28.75px); }
  }