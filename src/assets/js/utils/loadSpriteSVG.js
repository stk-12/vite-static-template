export async function loadSpriteSVG(url) {
  const response = await fetch(url);
  const svg = await response.text();
  document.body.insertAdjacentHTML("afterbegin", svg);
}