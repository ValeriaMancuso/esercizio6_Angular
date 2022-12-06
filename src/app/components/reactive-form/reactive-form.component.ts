import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      heroInfo: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        alterEgo: this.fb.control(null, [Validators.required]),
        nemico: this.fb.control(null, [Validators.maxLength(10)]),
        pianeta: this.fb.control(null, [Validators.required,Validators.minLength(10)]),

      }),
        potere: this.fb.array([]),
        debolezza: this.fb.array([]),
    });

  }

  getErrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  getPoteriF() {
    return (this.form.get('potere') as FormArray).controls;
  }
  getDebolezzaF() {
    return (this.form.get('debolezza') as FormArray).controls;
  }

  addPotere() {
    const control = this.fb.control(null, [Validators.required]);
    (this.form.get('potere') as FormArray).push(control);
  }
  addDebolezze() {
    const control = this.fb.control(null, [Validators.required]);
    (this.form.get('debolezza') as FormArray).push(control);
  }

  submit() {
    console.log(this.form.value);
  }
}
