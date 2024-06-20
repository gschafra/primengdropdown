import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectItem, SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public templates$: Observable<any[]|undefined>;
  private readonly templatesSubject: BehaviorSubject<SelectItem[]> = new BehaviorSubject<SelectItem[]>([]);
  public selectedItem: string = '2';

  public constructor()
  {
    this.templates$ = this.templatesSubject.asObservable();
  }

  ngOnInit() {
    setTimeout(() => {
      this.templatesSubject.next([
        {
          label: 'Val 1', value: '1',
        },
        {
          label: 'Val 2', value: '2',
        },
        {
          label: 'Val 3', value: '',
        },
      ]);
    }, 1);
  }
}
