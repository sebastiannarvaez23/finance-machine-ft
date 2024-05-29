import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'shared-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
    @Input() title: string = "";
    @Input() isVisible: boolean = false;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.isVisible = false;
        this.close.emit();
    }
}