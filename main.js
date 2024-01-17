const CelsiusInput = document.querySelector('#Celsius > input');
const FahrenheitInput = document.querySelector('#Fahrenheit > input');
const KelvinInput = document.querySelector('#Kelvin > input');

const roundToTwoDP = (num) => {
  return num.toFixed(2);
};


const CelsiusToFaAndKe = () => {
  const CelsiusTemp = parseFloat(CelsiusInput.value);
  const FahrenheitTemp = (CelsiusTemp * 1.8) + 32;
  const KelvinTemp = CelsiusTemp + 273.15;

  FahrenheitInput.value = roundToTwoDP(FahrenheitTemp);
  KelvinInput.value = roundToTwoDP(KelvinTemp);
};


const FahrenheitToCeAndKe = () => {
  const FahrenheitTemp = parseFloat(FahrenheitInput.value);
  const CelsiusTemp = (FahrenheitTemp - 32) * (5 / 9);
  const KelvinTemp = (FahrenheitTemp + 459.67) * (5 / 9);

  CelsiusInput.value = roundToTwoDP(CelsiusTemp);
  KelvinInput.value = roundToTwoDP(KelvinTemp);
};

const kelvinToCeAndFa = () => {
  const KelvinTemp = parseFloat(KelvinInput.value);
  const CelsiusTemp = kelvinTemp - 273;
  const FahrenheitTemp =  1.8 * (KelvinTemp - 273) + 32;

  CelsiusInput.value = roundToTwoDP(CelsiusTemp);
  FahrenheitInput.value = roundToTwoDP(FahrenheitTemp);
};


const main = () => {
  CelsiusInput.addEventListener('input', CelsiusToFaAndKe);
  FahrenheitInput.addEventListener('input', FahrenheitToCeAndKe);
  KelvinInput.addEventListener('input', KelvinToCeAndFa);
};

main();