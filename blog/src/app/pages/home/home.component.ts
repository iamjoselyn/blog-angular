import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications: Object [];

  constructor(private _service: PublicationService) { }

  ngOnInit(): void {
    this.publications = this._service.getPublications();
    console.log('otra array de pulicaciones desde home component', this.publications);
  }

  
  
}
