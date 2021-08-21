import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleNavbar]'
})
export class ToggleNavbarDirective {
  @Input('appToggleNavbar') targetId: string = null;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  @HostListener('click')
  onClick(): void {
    const $target: HTMLElement = this.renderer.selectRootElement(`#${this.targetId}`, true);
    const $element: HTMLElement = this.element.nativeElement;
    $target.classList.toggle('is-active');
    $element.classList.toggle('is-active');
  }
}
