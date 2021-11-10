import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; // @Input define que a propriedade product vai ser preenchida com dados vindos do parent ProductListComponent
  @Output() notify = new EventEmitter(); // @Output configura o disparo de um evento sempre que a propriedade notify for alterada
  constructor() {}

  ngOnInit() {}
}
