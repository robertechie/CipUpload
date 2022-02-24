import { Injectable } from '@angular/core';

interface IModal {
  Id: string;
  Visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  private modal: IModal[] = [];

  register(id: string) {
    this.modal.push({
      Id: id,
      Visible: false,
    });
  }

  openModel(id: string): Boolean {
    return !!this.modal.find((x) => x.Id == id)?.Visible;
  }

  onToggle(id: string) {
    const modal = this.modal.find((x) => x.Id == id);
    if (modal) {
      modal.Visible = !modal.Visible;
    }
  }
}
