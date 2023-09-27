const theCanvas = document.createElement('canvas');
const theContext = theCanvas.getContext('2d');

    const theImg = new Image;
    theImg.crossOrigin = '';
    theImg.onload = () => {
      theContext.drawImage(theImg, 0, 0, theImg.width, theImg.height, 0, 0, theImg.width, theImg.height);

      const theText = 'BEARSAREAWESOMEAREN\'TTHEY?';

      // const brightnessChars = ' .,:ilwW';
      // const brightnessChars = ' .`^",:;Il!i><~+_-?][}{1)(|tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
      const brightnessChars = ' .:;+=xX$';
      // const brightnessChars = ' ░▒▓█';
      // const brightnessChars = '  ░░▒▓▓███';
      const fontSizes = ['12px', '13px', '14px', '15px', '18px', '20px', '22px'];

      let myPixelArt = '';
      myPixelArt += '<div class="a-row-of-pixels">';
      let positionInText = 0;
      for (let y = 0; y < theImg.height; y += 1) {
        for (let x = 0; x < theImg.width; x++) {
          const theImageData = theContext.getImageData(x, y, 1, 1);
          const theRGBvalues = theImageData.data;
          const howBrightThisPixelIs = (theRGBvalues[0] + theRGBvalues[1] + theRGBvalues[2]) / 3; // the average
        
          const theLetter = theText.substr(positionInText, 1);
          positionInText++;
          if (positionInText === theText.length) positionInText = 0;
          myPixelArt += `<div
            class="a-pixel"
            style="
          color: rgb(${ theRGBvalues[0] }, ${ theRGBvalues[1] }, ${ theRGBvalues[2] });
          font-size: ${ fontSizes[Math.floor(howBrightThisPixelIs * fontSizes.length / 255)] };
                   ">${ theLetter }</div>`;
          // myPixelArt += `<div class="a-pixel">${ brightnessChars.substr(Math.floor(howBrightThisPixelIs * brightnessChars.length / 255), 1) }</div>`;
          // myPixelArt += `<div class="a-pixel" style="background: rgb(${ theRGBvalues[0] }, ${ theRGBvalues[1] }, ${ theRGBvalues[2] })"></div>`;
        }
        myPixelArt += '</div><div class="a-row-of-pixels">';
      }
      myPixelArt += '</div>';
      document.body.innerHTML = myPixelArt;
    };
    theImg.src = '/sample.jpg';