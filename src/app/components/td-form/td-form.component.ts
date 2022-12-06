import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('form', {static: true}) form!: NgForm;

  heroForm = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }
  hero: any = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }

  constructor() { }


  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => {
      console.log('Stato del form: ', status);
    });
  }

  submit(form: NgForm) {
    console.log(form.value);
    this.form.reset();
  }

}
