import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailItemComponent } from './components/email-item/email-item.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StoreModule } from '@ngrx/store'
import { selectedReducer } from './state/selected/selected.reducer';
import { ReaderComponent } from './components/reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ExpansionComponent,
    EmailListComponent,
    EmailItemComponent,
    TopBarComponent,
    ToolbarComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    StoreModule.forRoot({selected: selectedReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
