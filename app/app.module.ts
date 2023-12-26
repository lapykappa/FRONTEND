import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxButton, IxModule } from '@siemens/ix-angular';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { IxMapNavigation, IxMenu, IxMenuItem } from '@siemens/ix-angular';
import { AgGridModule } from 'ag-grid-angular';
import AgGridComponentComponent from './ag-grid-component/ag-grid-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    MapNavigationComponent,
    AgGridComponentComponent
    


    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IxModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    AgGridModule,
    FlexLayoutModule
    
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
export default class MapNavigation {}