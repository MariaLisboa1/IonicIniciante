import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string  = "Charles França do Código"; //criação de variavel

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public SomaDoisNumeros(num1:number, num2:number): void{ //criando função
    //alert(num1 + num2)
  }

  ionViewDidLoad() { //função que roda quando a página é carregada
      //this.SomaDoisNumeros(1, 99)
  }

}
