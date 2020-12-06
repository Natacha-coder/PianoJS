import { Component, OnInit } from '@angular/core';
import { Clavier } from './models/clavier.model';
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
      // Ecoute de la touche clavier appuyée si elle existe
      window.addEventListener("keypress", (_clavier) => {

        // Association touche clavier au son Mp3
        const _mapClavier = new Clavier();
        const _touchePressee = _mapClavier[_clavier["key"]];
    
        // key-white=document.getElementById("boite");

        const _elementTouche: HTMLElement = document.querySelector('[data-touche="'+_touchePressee+'"]');

        _elementTouche.classList.add('active');
        this._partition = this.player.buttonPlay(_touchePressee, this._partition, 'enregistrer');
        
        setTimeout(() => {
          _elementTouche.classList.remove('active');
        }, 100);
        
      });
    });
  }

  /**
   * Enregistrer la partition
   */
  enregistrer() {
    const enregistrer = this._partition;
    console.log("Partion à enregistrer: ", enregistrer);
  }

  /**
   * Efface la partition précédente et, enregistre la nouvelle partition
   */
  nouveau() {
    this._partition = [];
  }

  /**
   * Lis la partition enregistrée
   */
  lire() {
    this._partition.forEach((note, index) => {
      // Joue les notes lues avec un intervalle de 500ms pour jouer la note suivante :
      // -par exemple: la 2 ème note sera jouée à 1000ms [500ms * index (index commençant à 1 correspondant à la première note lue)]
      setTimeout(() => {
        this.player.buttonPlay(note, this._partition, 'lire');
      }, this._interval * index);
    });
  }
}

