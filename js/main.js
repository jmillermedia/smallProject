// JAVASCRIPT START

(() => {
    const image = document.querySelector('#sticks'),
    dropZone = document.querySelectorAll('.dropZone');

    function allowDrag(event) {
        event.dataTransfer.setData('draggedImage', this.id);
    }

    function allowDragOver(event) {
		//console.log('Dragged something over me!');
		event.preventDefault();
    }

    function allowDrop(event) {
        event.preventDefault();
        let droppedImage = event.dataTransfer.getData('draggedImage');

            this.appendChild(image); 
    }


    dropZone.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});

})();