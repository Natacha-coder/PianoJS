import { Component, OnInit } from '@angular/core';
import { Player } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _title = 'app works!';
  _partition = [];
  _interval = 500;

  constructor(public player: Player) {
    this.player = new Player();
  }
  
  ngOnInit() {
    /**
     * Composant principal
     * - Ecoute du chargement de la page
     * - Ecoute du clavier pour récupération de l'event
     * - Appel de la fonction buttonPlay avec la valeur de la touche pressée
     */
    window.addEventListener("load", () => {
      // a commenter listener clavier
      window.addEventListener("keypress", (_clavier) => {

        const _mapClavier = {
          'a': 'A0',
          'q': 'A0',
          'z': 'A0',
          's': 'A0',
          'e': 'A0',
          'r': 'A0',
          'f': 'A0',
          't': 'A0',
          'g': 'A0',
        };

        this._partition = this.player.buttonPlay(_mapClavier[_clavier["key"]], this._partition);
      });
    });
  }

  /**
   * Enregistrer
   */
  enregistrer() {
    const enregistrer = this._partition;
    console.log("Partion à enregistrer: ", enregistrer);
  }

  /**
   * 
   */
  nouveau() {
    this._partition = [];
  }

  /**
   * 
   */
  lire() {
    this._partition.forEach((note, index) => {
      // a commenter setTimeout avec * index 
      setTimeout(() => {
        this.player.buttonPlay(note, this._partition);
      }, this._interval * index);
    });
  }
}
