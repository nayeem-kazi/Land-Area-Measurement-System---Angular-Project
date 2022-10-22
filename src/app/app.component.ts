import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'result';
  sts: boolean = false;
  l1: number = 0;
  l2: number = 0;
  w1: number = 0;
  w2: number = 0;
  a: number = 0;
  b: number = 0;
  c: number = 0;
  s: number = 0;
  al: number = 0;
  a1: number = 0;
  a2: number = 0;
  a3: number = 0;
  b1: number = 0;
  b2: number = 0;
  b3: number = 0;
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  aw: number = 0;
  ra: number = 0;
  sa: number = 0;
  ta: number = 0;
  s1: number = 0;
  ta1: number = 0;
  s2: number = 0;
  ta2: number = 0;
  s3: number = 0;
  ta3: number = 0;
  ira: number = 0;
  cent:number = 0;
  kani:number = 0;
  gonda:number = 0;
  kora:number = 0;
  kranti:number = 0;
  acre:number = 0;
  
  

  rectArea() {
    this.al = (Number(this.l1) + Number(this.l2)) / 2;
    this.aw = (Number(this.w1) + Number(this.w2)) / 2;
    this.ra = Number(this.al) * Number(this.aw);
    this.cent = Number(this.ra)/Number(435.6);
    this.kani = Number(this.ra)/Number(17280);
    this.gonda = Number(this.ra)/Number(864);
    this.kora = Number(this.ra)/Number(216);
    this.kranti = Number(this.ra)/Number(72);
    this.acre = Number(this.ra)/Number(43200);
  }

  squareArea() {
    this.sa = Number(this.a) * Number(this.a);
  }

  triangleArea() {
    this.s = (Number(this.a) + Number(this.b) + Number(this.c))/2;
    this.ta = Math.sqrt((Number(this.s)*(Number(this.s) - Number(this.a))*(Number(this.s) - Number(this.b))*(Number(this.s) - Number(this.c))));
  }

  irregularArea(){
    this.s1 = (Number(this.a1) + Number(this.b1) + Number(this.c1))/2;
    this.ta1 = Math.sqrt((Number(this.s1)*(Number(this.s1) - Number(this.a1))*(Number(this.s1) - Number(this.b1))*(Number(this.s1) - Number(this.c1))));

    this.s2 = (Number(this.a2) + Number(this.b2) + Number(this.c2))/2;
    this.ta2 = Math.sqrt((Number(this.s2)*(Number(this.s2) - Number(this.a2))*(Number(this.s2) - Number(this.b2))*(Number(this.s2) - Number(this.c2))));

    this.s3 = (Number(this.a3) + Number(this.b3) + Number(this.c3))/2;
    this.ta3 = Math.sqrt((Number(this.s3)*(Number(this.s3) - Number(this.a3))*(Number(this.s3) - Number(this.b3))*(Number(this.s3) - Number(this.c3))));

    // total area
     
    this.ira = Number(this.ta1) + Number(this.ta2) + Number(this.ta3);
  }
}
