import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as crypto from 'crypto-random-string'

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.scss']
})
export class InitiateComponent implements OnInit {

  cmd_list: string[] = [];
  cmd_text_list: string[] = [
    '// ROOT',
    '// ACCESO_REQUERIDO',
    '// ACCESO_CONCEDIDO',
    '// INICIANDO PROCESOS...',
    '// CARGANDO_HTML ...... COMPLETADO',
    '// CARGANDO_CSS3 ...... COMPLETADO',
    '// CARGANDO_JS .......... COMPLETADO',
    '//',
    '// PROGRAMA INICIADO...',
  ];
  all_completed: boolean = false;
  audio:HTMLAudioElement = new Audio('../../assets/audio/futu.ogg');

  constructor(private router: Router) { }

  ngOnInit() {
    this.printCommands();
  }
  
  async printCommands() {
    for (let i = 0; i < this.cmd_text_list.length; i++) {
      const text = this.cmd_text_list[i];
      await this.writeLine( text );
      if ( (i + 1) === this.cmd_text_list.length ) {
        this.all_completed = true;
      }
    }
  }

  writeLine( text:string ) {
    return new Promise( resolve => {
      let delay = 500;
      text === '// CARGANDO_HTML ...... COMPLETADO' && (delay = 1500);
      setTimeout(() => {
        resolve(this.cmd_list.push(text));
      }, delay)
    });
  }

  onMouseEnter() {
    console.log('enter')
    // this.audio.play(); TODO fix this
  }

  onClick() {
    this.router.navigateByUrl('home');
  }
}
