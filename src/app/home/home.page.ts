import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pessoa = {
    foto: `https://static.vecteezy.com/ti/fotos-gratis/p2/24819288-ai-gerado-estudio-retrato-do-negrito-bravo-doberman-cachorro-dentro-terno-camisa-e-gravata-vestindo-oculos-de-sol-foto.jpeg`,
    nome: `Plínio Garcia Barretos Filho`,
    objetivo: `Digital Influencer & Professional Tiktoker`,
    contato: {
      telefone: `(21) 99999-9999`,
      email: `lobopidao@yahoo.com`,
      github: `github.com/PlinioPidao`,
      linkedin: `linkedin.com/PlinioGarciaBarretos`
    },
    softskills: [
      'Comunicação',
      'Trabalho em Equipe',
      'Proatividade',
      'Criatividade',
      'Bonito',
      'Cachorrão',
      'Inovação',
      'Caçador de Ratos',
      'Afastador de Gatos e Intrusos'
    ],
    formacao_academica: [
      {
        ano_inicio: '2017',
        ano_fim: '2020',
        instituicao: 'BAC - Batalhão de Ações com Cães',
        curso: 'Espantador e Caçador de Meliantes',
      },
      {
        ano_inicio: '2019',
        ano_fim: '2024',
        instituicao: 'TikTok Educacional',
        curso: 'Tiktoker Profissional, do Básico ao Coach',
      }
    ],
    projetos: [
      {
        ano_projeto: '2015',
        insituicao_projeto: 'NOME',
        
      }
    ]
  }

  constructor(){ }
}
