import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/models/publication';


@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() publicationCard: Publication

  constructor() { }

  ngOnInit(): void {
    
  }

}
