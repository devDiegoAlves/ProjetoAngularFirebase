import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn4.iconfinder.com/data/icons/sport-fitness-vol-4-1/512/gym_coach_trainer_fitness-64.png',
    items: [
      {
        icone: 'https://cdn2.iconfinder.com/data/icons/communication-media-vol-1/512/smart_house_intelligent_technology-64.png',
        texto: 'Início',
        link: '/home'
      },
      {
        icone: 'https://cdn1.iconfinder.com/data/icons/business-finance-vol-4-27/512/faq_help_question_answer-64.png',
        texto: 'Sobre',
        link: '/sobre'
      },
      {
        icone: 'https://cdn4.iconfinder.com/data/icons/communication-multimedia-vol-2/512/picture_photo_image_photography-64.png',
        texto: 'Galeria',
        link: '/galeria'
      },
      {
        icone: 'https://cdn2.iconfinder.com/data/icons/communication-media-vol-1/512/phone_contact_call_communication-64.png',
        texto: 'Contato',
        link: '/contato'
      }
    ]
  }

  constructor() { }

  ngOnInit() {}

}
