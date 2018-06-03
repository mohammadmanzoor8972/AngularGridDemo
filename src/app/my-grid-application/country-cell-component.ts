import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SelectItem} from 'primeng/components/common/api';
import {SelectItemGroup} from 'primeng/components/common/api';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'child-cell',
    template: `<p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [showClear]="true"></p-dropdown>`
})


export class CountryCellRenderComponent implements ICellRendererAngularComp {
    public params: any;
    optionLabel = '';

    cities: City[];

    selectedCity: City;

    cars: SelectItem[];

    selectedCar1: string;

    selectedCar2: string = 'BMW';
    
    selectedCar3: string;

    groupedCars: SelectItemGroup[];
    search(event) {      
        this.cities = [ {"name": "Afghanistan", "code": "AF"}, 
            {"name": "Åland Islands", "code": "AX"}, 
            {"name": "Albania", "code": "AL"}, 
            {"name": "Algeria", "code": "DZ"}, 
            {"name": "American Samoa", "code": "AS"}]
    }
    findChoices(searchText: string) {
        return ['John', 'Jane', 'Jonny'].filter(item =>
          item.toLowerCase().includes(searchText.toLowerCase())
        );
      }
     
      getChoiceLabel(choice: string) {
        return `@${choice} `;
      }
    agInit(params: any): void {
        this.params = params.value;
        this.selectedCity = params.value;

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
        
    }

    public invokeParentMethod(data) {
     this.params.context.componentParent.upcomingDealNavigation(data);
    }

    refresh(): boolean {
        return false;
    }
}
