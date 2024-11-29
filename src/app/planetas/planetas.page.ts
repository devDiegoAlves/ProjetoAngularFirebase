import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';
import { ref, uploadBytesResumable, getDownloadURL, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {

  planeta: any = {
    nome: null,
    possui_populacao: null,
    massa: null,
    raio: null,
    distancia: null,
    foto: null
  }

  planetas: any = [];
  
  file: any = {};

  constructor(
    public crudService: CrudService,
    private _message: MessageService,
    private storage: Storage
  ) {
    this.getPlanetas();
  }

  getPlanetas() {
    this.crudService.fetchAll('planetas')
      .then(resp => {
        console.log(resp);
        this.planetas = resp;
      })
  }

  ngOnInit() {
  }

  salvar() {

    if (this.planeta.id)
      this.crudService.update(this.planeta.id, this.planeta, 'planetas')

    if (!this.planeta.id)
    this.crudService.insert(this.planeta, 'planetas');

    this.planeta.nome = '';
    this.planeta.possui_populacao = '';
    this.planeta.massa = '';
    this.planeta.raio = '';
    this.planeta.distancia = '';
    this.getPlanetas();
  }

  remover(id: string) {
    this.crudService.remove(id, 'planetas')
      .then(() => {
        this.getPlanetas();
      })
  }

  editar(planeta: any) {
    this.planeta = planeta;
  }

  memorizarArquivo(event: any){
    this.file = event.target.files[0];
    this.fazerUpload();
  }

  fazerUpload() {
    if (!this.file.name) {
      this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
      return;
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(this.storage, this.file.name);
      const uploadTask = uploadBytesResumable(storageRef, this.file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Envio pausado');
              break;
            case 'running':
              console.log('Carregando arquivo');
              this._message.show('Carregando arquivo, favor aguardar!', 2000);
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log('Não enviado! Usuário sem permissão');
              this._message.show('Não enviado! Usuário sem permissão!');
              break;
            case 'storage/canceled':
              // User canceled the upload
              console.log('Não enviado: upload cancelado');
              this._message.show('Erro: Upload cancelado!');
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              console.log('Não enviado. Ocorreu um erro desconhecido!');
              this._message.show('Oops! Ocorreu um erro desconhecido!');
              break;
          }

          console.log('Arquivo enviado');
          this._message.show('Arquivo enviado com sucesso!');
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Url do arquivo é ' + downloadURL)
          });
        }
      );
  }

}
