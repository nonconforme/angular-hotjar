import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotjarService } from './hotjar.service';
import { HotjarComponent } from './hotjar.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    HotjarComponent
  ],
  exports: [
    HotjarComponent
  ],
  providers: [
    HotjarService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HotjarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HotjarModule,
      providers: [
        HotjarService
      ]
    };
  }
}
