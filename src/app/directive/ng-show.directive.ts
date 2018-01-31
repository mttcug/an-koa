import { Directive, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appNgShow]'
})
export class NgShowDirective {

  @Input('appNgShow') ngShow:boolean ;

  constructor(el:ElementRef) {
    console.log("ngShow:",this.ngShow);
    this.init();
    el.nativeElement.style.display = this.ngShow ? 'block' : 'none';
  }

  init(){
    console.log("ngShow1:",this.ngShow);
  }
}
