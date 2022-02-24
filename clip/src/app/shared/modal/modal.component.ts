import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public modal: ModalService) {}
  @Input() ModelID = '';
  ngOnInit(): void {}

  closeModal() {
    this.modal.onToggle(this.ModelID);
  }
}
