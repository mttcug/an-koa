import { Directive, ElementRef, Input, AfterViewInit, Renderer2 ,OnChanges ,SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appNgShow]'
})
export class NgShowDirective implements AfterViewInit ,OnChanges{

  @Input('appNgShow') ngShow:boolean ;

  constructor(private el: ElementRef, private renderer2:Renderer2){}

  ngAfterViewInit() {
    this.el.nativeElement.style.display = this.ngShow ? 'block' : 'none';
   /* this.renderer2.addClass(this.el.nativeElement, 'btn');*/
  }

  ngOnChanges(changes: SimpleChanges){
    this.el.nativeElement.style.display = this.ngShow ? 'block' : 'none';
  }

}
