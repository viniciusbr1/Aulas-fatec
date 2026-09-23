import { Component } from '@angular/core';
import { ItemCesta } from '../model/item-cesta';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {

  mensagem: string = '';

  valorCesta: number = 0;

  itens: ItemCesta[] = [];

  ngOnInit() {

    const cestaStorage =
      localStorage.getItem('cesta');

    if (cestaStorage != null) {

      this.itens =
        JSON.parse(cestaStorage);

    }

    this.calculaTotal();

  }

  calculaTotal() {

    this.valorCesta = 0;

    for (let obj of this.itens) {

      this.valorCesta =
        this.valorCesta + obj.valorTotal;

    }

  }

}