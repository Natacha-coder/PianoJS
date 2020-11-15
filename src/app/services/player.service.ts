export class Player {

  _pathMP3 = './assets/mp3/';

    /**
     * Fonction de lecture de fichier audio mp3
     * suivant une valeur de chaîne
     * @param {*} _touche
     */
  buttonPlay(_event: any,  _partition) {
    let _touche = null;

    console.log('[Player] Service - Partition', _partition);

    // a commenter if et else
    if (_event && _event.srcElement && _event.srcElement.attributes) {
      // a commenter for
      for (let index = 0; index < _event.srcElement.attributes.length; index++) {
        const element = _event.srcElement.attributes[index];
        // a commenter if
        if (element.nodeName === "data-touche") {
          _touche = element.nodeValue;
          _partition.push(_touche);
        }
      }
    } else {
      _touche = _event;
    }

    if (_touche !== null) {

      console.log("[Player] Service - Touche reçue :" + _touche, this._pathMP3 + _touche + '.mp3');
      
      const toPlay = new Audio(this._pathMP3 + _touche + '.mp3');
      toPlay.play();
    }

    return _partition;
  }
}