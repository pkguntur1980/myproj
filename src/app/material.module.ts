import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule],
})
export class MaterialModule { }