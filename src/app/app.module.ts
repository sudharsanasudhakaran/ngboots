import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PopoverComponent } from './popover/popover.component';
import { ModalComponent } from './modal/modal.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component'
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PopoverComponent,
    ModalComponent,
    TypeaheadComponent,
    NavbarComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
