import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabsComponent) tabs?: QueryList<TabsComponent>;
  constructor() {}
  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((x) => x.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectActiveTab(this.tabs!.first);
    }
  }
  selectActiveTab(tab: TabsComponent) {
    //set all other tabs to false
    this.tabs?.forEach((x, i) => {
      x.active = false;
    });
    tab.active = true;
    return false;
  }
}
