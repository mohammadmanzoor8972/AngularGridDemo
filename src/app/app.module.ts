import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";

import { HttpClientModule } from '@angular/common/http';
import { CountryCellRenderComponent } from "./my-grid-application/country-cell-component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule } from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        CountryCellRenderComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        ),
        HttpClientModule,
        AutoCompleteModule,
        FormsModule,
        DropdownModule,
        TextInputAutocompleteModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        CountryCellRenderComponent
    ]
})
export class AppModule {
}
