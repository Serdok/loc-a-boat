import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGetFileName]'
})
export class GetFileNameDirective {
  @Input('appGetFileName') targetId: string = null;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  @HostListener('change')
  onChange(): void {
    const $target: HTMLElement = this.renderer.selectRootElement(`#${this.targetId}`, true);
    const $element: HTMLInputElement = this.element.nativeElement;
    const filename = $element?.files[0]?.name ?? 'No file selected';
    this.renderer.setProperty($target, 'innerHTML', filename);
  }
}
