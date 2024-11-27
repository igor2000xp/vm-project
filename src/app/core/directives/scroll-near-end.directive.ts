import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScrollNearEnd]'
})
export class ScrollNearEndDirective implements OnInit {
  @Output() nearEnd: EventEmitter<void> = new EventEmitter<void>();

  /**
   * threshold in PX when to emit before page end scroll
   */
  @Input() threshold = 120;

  private oldScrolledY = 0;

  private window!: Window;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // save window object for type safety
    this.window = window;
    console.log('init');
  }

  @HostListener('window:scroll', ['$event.target'])
  windowScrollEvent(event: KeyboardEvent) {
    // height of whole window page
    const heightOfWholePage = this.window.document.documentElement.scrollHeight;

    // how big in pixels the element is
    const heightOfElement = this.el.nativeElement.scrollHeight;

    // currently scrolled Y position
    const currentScrolledY = this.window.scrollY;

    // height of opened window - shrinks if console is opened
    const innerHeight = this.window.innerHeight;

    const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

    const scrollToBottom =
      heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;

    // console.log('scrollToBottom:', scrollToBottom);

    // console.log(
    // currentScrolledY,
    //   innerHeight,
    //   heightOfWholePage,
    //   spaceOfElementAndPage
    // );


    if (scrollToBottom < this.threshold) {
      if (currentScrolledY > this.oldScrolledY + 200) { // Debouncing
        this.nearEnd.emit();
        this.oldScrolledY = currentScrolledY;
      }
    }
  }
}
