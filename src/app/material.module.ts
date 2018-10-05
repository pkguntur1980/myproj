import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule],
  exports: [MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule],
})
export class MaterialModule { }