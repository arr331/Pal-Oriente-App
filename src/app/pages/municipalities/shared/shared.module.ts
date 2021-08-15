import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [ModalComponent, CommentsComponent, DescriptionComponent],
  exports: [CommentsComponent, DescriptionComponent]
})
export class SharedModule {}
