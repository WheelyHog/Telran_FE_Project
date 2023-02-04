
let center = [55.57212128108693,37.56397691534423];
ymaps.ready(init);
function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 16
	});
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

