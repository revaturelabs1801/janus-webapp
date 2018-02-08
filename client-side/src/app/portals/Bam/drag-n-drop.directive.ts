import { Directive, ViewContainerRef } from '@angular/core';
/**
 * @Author: Daniel Robinson, Tyler Dresselhouse, Dylan Britton
 *  Allows drag and drop functionality
 */
@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
