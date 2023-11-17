
// tipificación contextual
// TypeScript utiliza las ubicaciones de las variables para inferir sus tipos. Este mecanismo se conoce como tipificación contextual.
// TypeScript sabe que el eventparámetro es una instancia de MouseEventdebido al clickevento.

document.addEventListener('click', function (event) {
    console.log(event.button); //compiler error
});