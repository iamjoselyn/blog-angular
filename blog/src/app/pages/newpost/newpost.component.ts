import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  //Referencia formulario Newpost con su tipo
  formNewpost: FormGroup;

  //Declaración del FormBuilder y inyección del servicio
  constructor(private fb:FormBuilder, 
              private publicationService: PublicationService,
              private router: Router) {
    //llamada del método que crea el formulario
    this.createFormNewpost();
  }

  ngOnInit(): void {
    // this.publicationService.addPublication(this.formNewpost);
  }

  // Validación de campos url, title, textpost
  get urlInvalid (): boolean {
    return this.formNewpost.get('url').invalid && this.formNewpost.get('url').touched;
  }

  get titleInvalid (): boolean {
    return this.formNewpost.get('title').invalid && this.formNewpost.get('title').touched;
  }

  get textpostInvalid (): boolean {
    return this.formNewpost.get('textpost').invalid && this.formNewpost.get('textpost').touched;
  }

  //Método que crea el formulario
  createFormNewpost(): void {
    //se llama al form y se añade los campos
    //validator patter para URL no funciona 
    //Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    this.formNewpost = this.fb.group({
      url: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      textpost: ['', [Validators.required]],
      tags: ['']
    });
  }

  addNewpost() {
    console.log('esta es el form', this.formNewpost);

    const image = this.formNewpost.value.url;
    const title = this.formNewpost.value.title;  
    const textpost = this.formNewpost.value.textpost;
    const tags = this.formNewpost.value.tags;
    
    const userPublication = new Publication(image,title,textpost,tags);
    
    this.publicationService.publications.push(userPublication);

    if (this.formNewpost.valid) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Por favor, rellene todos los campos correctamente')
    }
 }
}
