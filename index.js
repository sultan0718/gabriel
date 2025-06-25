async function fetchData() {
  const name = document.getElementById('pokemonName').value.toLowerCase();
  const img = document.getElementById('pokemonSprite');

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error('Pokemon not found');

    const data = await response.json();
    img.src = data.sprites.front_default;
    img.style.display = 'block';
  } catch (err) {
    alert(err.message);
    img.style.display = 'none';
  }
}