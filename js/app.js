// Platos: edita nombres, precios y descripciones aquí (los marcados con * son de ejemplo)
const P = [
  { id: 'casa1', c: 'casa', n: 'LA SUPREMA', p: '$ 20.000', d: 'Pollo apanado en trozos, salchicha ranchera , papas a la francesa ,papa ripio, queso costeño , salsa especial de la casa.' },
  { id: 'casa2', c: 'casa', n: 'PICADA AZTECA', p: '$ 35.000', d: '150 gr de lomo y 150 gr de cerdo  salteados en vegetales, chorizo picado , papas a la francesas , guacamole ,pico e gallo' },
  { id: 'casa3', c: 'casa', n: 'TENDER DE POLLO ( menu infantil)', p: '$ 15.000', d: 'Papas a la francesas con trozos de pollos apanados' },
  { id: 'perro1', c: 'perros', n: 'PERRO CHIHUAHUA', p: '$ 5.000', d: 'Mini perro, para picar.' },
  { id: 'perro2', c: 'perros', n: 'PERRO DISTRITO', p: '$ 13.000', d: 'Pan brioche, salchicha tipo americana, cebolla grillé, queso gratinado, papa ripio, mermelada de piña y tocineta, salsa cheddar, tartara y papa francesa.' },
  { id: 'perro3', c: 'perros', n: 'PERRO SUIZO MX', p: '$ 15.000', d: 'Pan brioche, salchicha suiza, salsa de queso cheddar, queso costeño asado, cebolla grillé, tocineta y mermelada de piña y tocineta.' },
  { id: 'mini', c: 'hamburguesas', n: 'MINI BURGUER', p: '$ 5.000', d: 'Mini hamburguesa con lechuga y tomate.*' },
  { id: 'minix3', c: 'hamburguesas', n: 'MINI BURGUER X 3', p: '$ 15.000', d: 'Tres mini hamburguesas para compartir.*' },
  { id: 'norte', c: 'hamburguesas', n: 'HAMBURGUESA "LA NORTEÑA"', p: '$ 13.000', d: 'Pan brioche, 150 gm de carne artesanal, cebolla caramelizada con tocineta, salsa de queso cheddar, salsa tartara, queso mozzarella, tocineta, dip de pimentón, 150 gm de papa francesa.' },
  { id: 'monarca', c: 'hamburguesas', n: 'HAMBURGUESA "LA MONARCA"', p: '$ 18.000', d: 'Hamburguesa doble con queso y papas.*' },
  { id: 'reina', c: 'hamburguesas', n: 'HAMBURGUESA "LA REINA MX"', p: '$ 21.000', d: 'Hamburguesa con queso cheddar derretido.*' },
  { id: 'jgl', c: 'hamburguesas', n: 'HAMBURGUESA JGL', p: '$ 25.000', d: 'Hamburguesa doble con todos los ingredientes.*' },
  { id: 'suizo1', c: 'suizos', n: 'MINI SUIZO', p: '$ 14.000', d: 'Papa francesa, media salchicha suiza, Butifarra lechuga, papa ripio, salsa cheddar, salsa tártara.' },
  { id: 'suizo2', c: 'suizos', n: 'SUIZO MX', p: '$ 18.000', d: 'Papa francesa, salchicha suiza, butifarra, queso, cebolla, lechuga, papa ripio, salsa tártara, salsa cheddar.' },
  { id: 'suizo3', c: 'suizos', n: 'SUIZO ESPECIAL', p: '$ 25.000', d: 'Papa francesa, pulled pork, salchicha suiza, queso gratinado, cebolla, lechuga, papa ripio, salsa cheddar, salsa tártara, mermelada de peperoni' },
  { id: 'suizo4', c: 'suizos', n: 'SALCHIPAPA TEXANA', p: '$ 23.000', d: 'Papas a la francesa, salchicha ranchera, Pollo Apanado ,maiz tierno, queso costeño frito, salsa especial de la casa.' },
  { id: 'desgranado1', c: 'desgranados', n: 'DESGRANADO SUIZO', p: '$ 20.000', d: 'Salchicha suiza, papa francesa, queso mozzarella, maíz tierno, salsa cheddar y tocineta .' },
  { id: 'desgranado2', c: 'desgranados', n: 'DESGRANADO DE POLLO', p: '$ 19.000', d: '200gr de pechuga , papa francesa, queso mozzarella, maíz tierno, salsa cheddar y tocineta .' },
  { id: 'desgranado3', c: 'desgranados', n: 'DESGRANADO MIXTO', p: '$ 21.000', d: 'Salchicha suiza, pollo a la plancha , queso mozzarella , maiz , papa ripio , papas a la francesas' },
  { id: 'mx1', c: 'mexico', n: 'BURRITO MX', p: '$ 19.000', d: 'Burrito relleno de pollo y vegetales.*' },
  { id: 'mx2', c: 'mexico', n: 'TACO BANDIDO (x3)', p: '$ 19.000', d: 'Tortilla, cebolla encurtida, bondiola de cerdo, guacamole, pico de gallo, picante a elección (mango habanero), chicharrón.' },
  { id: 'mx3', c: 'mexico', n: 'TACO DE POLLO FUEGO', p: '$ 20.000', d: 'Tortilla, 180gr de tender de pollo apanado, queso costeño, cebolla encurtida, guacamole, pico gallo, picante a elección (mango habanero)' }];
const tarjeta = x => `<div class="col-12 col-sm-6 col-md-4"><div class="card-plato"><img src="img/${x.id}.jpg" alt="${x.n}"><div class="info"><h5>${x.n}</h5><p>${x.p}</p><a class="btn btn-outline-plaza w-100" href="producto.html?id=${x.id}">VER DETALLE</a></div></div></div>`;

// Menú: mostrar platos por categoría
const grid = document.getElementById('grid');
if (grid) {
  const btns = document.querySelectorAll('#cats button');
  const mostrar = c => {
    grid.innerHTML = P.filter(x => x.c == c).map(tarjeta).join('');
    btns.forEach(b => b.classList.toggle('on', b.dataset.cat == c));
  };
  btns.forEach(b => b.onclick = () => mostrar(b.dataset.cat));
  mostrar('hamburguesas');
}

// Detalle del plato (producto.html?id=...)
const pimg = document.getElementById('p-img');
if (pimg) {
  const x = P.find(p => p.id == new URLSearchParams(location.search).get('id')) || P[8];
  pimg.src = 'img/' + x.id + '.jpg'; pimg.alt = x.n;
  document.getElementById('p-nom').textContent = x.n;
  document.getElementById('p-pre').textContent = x.p;
  document.getElementById('p-des').textContent = x.d;
  document.getElementById('rel').innerHTML = P.filter(p => p.id != x.id).sort(() => Math.random() - .5).slice(0, 3).map(tarjeta).join('');
  let n = 1; const c = document.getElementById('cant');
  document.getElementById('mas').onclick = () => c.textContent = ++n;
  document.getElementById('menos').onclick = () => { if (n > 1) c.textContent = --n };
}

// Flecha para subir (aparece al llegar al final de la página)
const subir = document.getElementById('subir');
addEventListener('scroll', () => { subir.style.display = (innerHeight + scrollY >= document.body.scrollHeight - 80) ? 'block' : 'none' });
subir.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
