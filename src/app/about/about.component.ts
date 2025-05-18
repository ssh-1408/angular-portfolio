import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('experienceEntry', { read: ElementRef }) entries!: QueryList<ElementRef>;
  @ViewChild('heroLeft', { static: false }) heroLeft!: ElementRef;

  ngAfterViewInit(): void {
    // Animate hero-left immediately after view init
    if (this.heroLeft) {
      setTimeout(() => {
        this.heroLeft.nativeElement.classList.add('in-view');
      }, 100); // slight delay for visual effect
    }

    // Animate experience entries on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.entries.forEach((entryRef) => {
      observer.observe(entryRef.nativeElement);
    });
  }
}
