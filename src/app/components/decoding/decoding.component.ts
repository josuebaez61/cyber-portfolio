import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as crypto from 'crypto-random-string'

@Component({
  selector: 'app-decoding',
  templateUrl: './decoding.component.html',
  styleUrls: ['./decoding.component.scss']
})
export class DecodingComponent implements OnInit, OnDestroy {

  @Input() length: number = 40;
  @Input() refresh: number = 500;
  @Input() stopIn: number|null;
  @Input() type: 'base64'| 'url-safe'| 'numeric'| 'distinguishable'| 'ascii-printable'| 'alphanumeric' = 'alphanumeric';
  @Output() stopped: EventEmitter<boolean> = new EventEmitter(false);

  code: string = "";
  interval: ReturnType<typeof setInterval>;
  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.stopped.emit(true);
    this.type;
  }

  ngOnInit(): void {
    this.code = crypto({length:this.length, type: this.type});
    this.interval = setInterval(() => {
      this.code = crypto({length:this.length, type: this.type});
      console.log('click')
    }, this.refresh);
    if ( this.stopIn ) {
      this.timeout();
    }
  }

  timeout() {
    setTimeout(() => {
      this.ngOnDestroy();
    }, this.stopIn)
  }
}
