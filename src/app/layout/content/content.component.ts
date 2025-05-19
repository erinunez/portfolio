import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit, OnChanges{
  @Input() selectedTabs:any  = ''; // decorate the property with @Input()

ngOnInit(): void {
  this.selectedTabs = localStorage.getItem("tabs")
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(this.selectedTabs)
  if (changes['getCurrentTabs']) {
    console.log('Previous message:', changes['tabs'].previousValue);
    console.log('Current message:', changes['tabs'].currentValue);
  }
}


}
