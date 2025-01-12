import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
    selector: 'dps-title-page',
    imports: [],
    templateUrl: './dps-title-page.component.html',
    styleUrl: './dps-title-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpsTitlePageComponent {
  icon = input<string>();
  text = input.required<string>();
  isDesktopDesign = signal(false);
  responsive = inject(BreakpointObserver);

  constructor() {
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isDesktopDesign.set(true);
      if (result.matches) {
        this.isDesktopDesign.set(false);
      }
    });
  }
}
