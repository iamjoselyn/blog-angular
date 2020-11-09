import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Publication } from '../models/publication';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  publications: Publication [] = [
    new Publication(
      '/assets/img/img1.png', 
      'How To Use Pinterest To Boost Traffic and Sales for Your Business',
      'Driving engagement and traffic from your target audience on social media has become increasingly challenging… ',
      'CONTENT & SOCIAL MARKETING'),
    new Publication(
      '/assets/img/img2.jpeg',
      'Self-Care Package For Students: A Social Emotional Activity for Remote Learning',
      'Now more than ever, the emotional support and consistency derived from special school rituals is…',
      'EDUCATION'),
    new Publication(
      '/assets/img/img3.png',
      '10 Graphic Design Portfolio Examples (Easy Enough To DIY!)',
      'One of the great things about networking as a graphic designer is that your work…',
      'DESIGN PRINCIPLESTIPS & TRICKSTRENDING IDEAS',),
    new Publication(
      '/assets/img/img4.jpg',
      'How to Write an Effective LinkedIn Headline in 2020',
      'LinkedIn has long since solidified its reputation as the go-to platform for both job seekers… ',
      'CONTENT & SOCIAL MARKETINGTIPS & TRICKS')
  ]

  constructor() {}


  getPublications(): Publication[] {
    return this.publications
  }
}

