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
          
          'a': 'C2', 'z': 'D2', 'e': 'E2', 'r': 'F2', 't': 'G2', 'y': 'A2', 'u': 'B2', 'i': 'C3', 'o': 'D3',
          'p': 'E3', '^': 'F3', '7': 'G3', '8': 'A3', '9': 'B3', 'q': 'C4', 's': 'D4', 'd': 'E4', 'f': 'F4',
          'g': 'G4', 'h': 'A4', 'j': 'B4', 'k': 'C5', 'l': 'D5', 'm': 'E5', 'ù': 'F5', '*': 'G5', '4': 'A5',
          '5': 'B5', '6': 'C6', '<': 'D6', 'w': 'E6', 'x': 'F6', 'c': 'G6', 'v': 'A6', 'b': 'B6', 'n': 'C7',
          '²': 'Eb2', '&': 'Ds2', 'é': 'Fs2', '"': 'Gb2', '(': 'Bb2', '-': 'Eb3', 'è': 'Ds3', '_': 'Fs3', 'ç': 'Gb3', 
          'à': 'Bb3', ')': 'Eb4', '=': 'Ds4', '/': 'Fs4', '#': 'Gb4', '{': 'Bb4', '[': 'Eb5', '|': 'Ds5', '%': 'Fs5',
          '@': 'Gb5', ']': 'Bb5', '}': 'Eb6', 'µ': 'Ds6', '£': 'Fs6', '¤': 'Gb6', '§': 'Bb6'
                    
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
