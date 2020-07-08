import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from "./accordion/accordion.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ModalComponent } from "./modal/modal.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { PopoverComponent } from "./popover/popover.component";
const routes: Routes = [
  {
    path: "accordion",
    component: AccordionComponent,
  },
  {
    path: "carousel",
    component: CarouselComponent,
  },
  {
    path: "modal",
    component: ModalComponent,
  },
  {
    path : "typeahead",
    component : TypeaheadComponent
  },
  {
    path : "popover",
    component : PopoverComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true}),NgbModule],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
