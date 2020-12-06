export class Player {

  _pathMP3 = './assets/mp3/';
  indice = 0;
  
    /**
     * Fonction de lecture de fichier audio mp3
     * suivant une valeur de chaîne
     * @param {*} _touche
     */
  buttonPlay(_event: any,  _partition, mode: 'lire'| 'enregistrer' = 'enregistrer') {
    let _touche = null;

    this.change(_event, 'up');
    
    // a commenter if et else
    if (_event && _event.srcElement && _event.srcElement.attributes && mode === 'enregistrer') {
      // a commenter for
      for (let index = 0; index < _event.srcElement.attributes.length; index++) {
        const element = _event.srcElement.attributes[index];
        // a commenter if
        if (element.nodeName === "data-touche") {
          _touche = element.nodeValue;
          _partition.push(_touche);
        }
      }
    } else if (!_event.srcElement && mode === 'enregistrer'){
      console.log('event', _event);
      _touche = _event;
      _partition.push(_touche);
    } else {
      console.log('lecture', _event);
      _touche = _event;
    }

    console.log('[Player] Service - Partition', _partition, _event);

    if (_touche !== null) {
      console.log("[Player] Service - Touche reçue :" + _touche, this._pathMP3 + _touche + '.mp3');
      const toPlay = new Audio(this._pathMP3 + _touche + '.mp3');
      toPlay.play();
    }

    this.change(_event, 'down');

    return _partition;
  }

  change(_event: any, mode: 'up' | 'down') {
    
    console.log('change', _event, mode);

    if(_event && _event.srcElement && _event.srcElement.style) {
      if(this.indice === 0) {
          _event.srcElement.style.backgroundColor="lightgray";
          this.indice=1;
        } else {
          _event.srcElement.style.backgroundColor="";
          this.indice=0;
        }
    }
  }
}
