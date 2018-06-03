import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";
import { HttpClient } from '@angular/common/http';
import { CountryCellRenderComponent } from "./country-cell-component";
import { AutoCompleteModule } from "primeng/autocomplete";
import {DropdownModule} from 'primeng/dropdown';


@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    private frameworkComponents;
    constructor(private http : HttpClient) {
        var scope:any = this; 
        this.frameworkComponents = {"CountryCellRenderComponent":CountryCellRenderComponent}

        this.columnDefs = [
            {headerName: "index", field: "index"},
            {headerName: "balance", field: "balance"},
            {headerName: "picture", field: "picture"},
            {headerName: "age", field: "age", cellEditor: 'numericCellEditor',"editable": true},
            {headerName: "eyeColor", field: "eyeColor","editable": true},
            {headerName: "name", field: "name","editable": true},
            {headerName: "gender", field: "gender","editable": true},
            {headerName: "company", field: "company","editable": true, cellRenderer: 'CountryCellRenderComponent'},
            {headerName: "email", field: "email","editable": true},
            {headerName: "phone", field: "phone"},
            {headerName: "address", field: "address","editable": true},
            {headerName: "registered", field: "registered"},
            {headerName: "latitude", field: "latitude"},
            {headerName: "longitude", field: "longitude"},
            {headerName: "greeting", field: "greeting"},
            {headerName: "favoriteFruit", field: "favoriteFruit"},

        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]

        this.getConfig()
            .subscribe(function(data){               
                scope.rowData = data;
            })

    }

    getConfig() {
        return this.http.get("assets/stocks.json");
      }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }

    public params: any;

    public selectedCity1:any;

    public cities1:any = [ "India", "Nepal", "SriLanka", "Burma"];
   
    text: string;

    results: any;

    search(event) {      
        this.results = [ "India", "Nepal", "SriLanka", "Burma"];
       
    }
}

// simple function cellRenderer, just returns back the name of the country
function CountryCellRenderer(params) {
    //console.log(params)
    return params.value;
}

