import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LayoutComponent),
      multi: true
    }
  ]
})

export class LayoutComponent {
  currentTabs: any = 'home'
  getCurrentTabs(val:any){
    this.currentTabs = val
  }
}
