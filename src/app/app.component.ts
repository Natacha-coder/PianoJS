import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators/catchError';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  _touche = [];

  ngOnInit() {
    //*** ajouter une variable de type []
    var _note = [];

    /**
     * Composant principal
     * - Ecoute du chargement de la page
     * - Ecoute du clavier pour récupération de l'event
     * - Appel de la fonction buttonPlay avec la valeur de la touche pressée
     */
    window.addEventListener("load", () => {
      window.addEventListener("keypress", (_clavier) => {
          this.buttonPlay(_clavier["key"]);
      });
    });
  }

  /**
   * Enregistrer
   */
  enregistrer() {
    const enregistrer = this._touche.push("a", "z", "e", "r", "t", "y", "u");
    console.log("partion", enregistrer);
  }

  /**
     * Fonction de lecture de fichier audio mp3
     * suivant une valeur de chaîne
     * @param {*} _touche
     */
  buttonPlay(_event: any) {
    let _touche = null;

    for (let index = 0; index < _event.srcElement.attributes.length; index++) {
      const element = _event.srcElement.attributes[index];
      if (element.nodeName === "data-touche") {
        _touche = element.nodeValue;
      }
    }

    if (_touche !== null) { 
      console.log("Touche reçue :" + _touche, './assets/mp3/' + _touche + '.mp3');
      const toPlay = new Audio('./assets/mp3/' + _touche + '.mp3');
      toPlay.play();
    }
  }

}
