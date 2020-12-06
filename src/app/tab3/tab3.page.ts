import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  RPA: number;
  LPA: number;
  DAo: number;
  weight: number;
  height: number;
  BSA: number;
  BSAstring: string;
  mcgoon: number;
  mcgoonstring: string;
  nakata: number;
  nakatastring: string;
  classification1: string;
  classification2: string;

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  clear(){
    this.RPA = null;
    this.LPA = null;
    this.DAo = null;
    this.weight = null;
    this.height = null;
    this.BSA = null;
    this.BSAstring = null;
    this.mcgoon = null;
    this.mcgoonstring = null;
    this.nakata = null;
    this.nakatastring = null;
    this.classification1 = null;
    this.classification2 = null;
  }

  calculate() {
    if (this.RPA == null || this.LPA == null || this.DAo == null || this.weight == null || this.height == null){
      this.presentAlert()
    } else {
      this.BSA = Math.sqrt((this.weight*this.height/3600)) ;
      this.BSAstring = this.BSA.toFixed(2);
      this.mcgoon = (this.RPA + this.LPA) / this.DAo;
      this.mcgoonstring = this.mcgoon.toFixed(1);
      this.nakata = ((3.14*this.RPA/2*this.RPA/2) + (3.14*this.LPA/2*this.LPA/2)) / this.BSA;
      this.nakatastring = this.nakata.toFixed(1);
      if (this.mcgoon > 1.5){
        this.classification1 = 'Adequate PA size'
      } else {
        this.classification1 = 'Inadequate PA size'
      }
      if (this.nakata > 200){
        this.classification2 = 'Adequate PA size'
      } else {
        this.classification2 = 'Inadequate PA size'
      }
    }
  }

  constructor(public alertController: AlertController) {}

}
