import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Aorta: number;
  SVC: number;
  IVC: number;
  PA: number;
  PV: number;
  Flow: number;
  Flowstring: string;
  Classification: string;

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  clear(){
    this.Aorta = null;
    this.SVC = null;
    this.IVC = null;
    this.PA = null;
    this.PV = null;
    this.Classification = null;
    this.Flowstring = null;
    this.Flow = null;
  }

  calculate() {
    if (this.Aorta == null || this.SVC == null || this.IVC == null || this.PA == null || this.PV == null){
      this.presentAlert()
    } else {
      var mixed : number;
      var pulmonary: number;
      mixed = (3*this.SVC + this.IVC) / 4;
      pulmonary = this.PV - this.PA;
      this.Flow = (this.Aorta - mixed) / pulmonary;
      this.Flowstring = (this.Flow).toFixed(1);
      if (this.Flow == 1) {
        this.Classification = "no shunting or bidirectional shunting in equal magnitude"
      } else if (this.Flow < 1){
        this.Classification = "right to left shunt" 
      } else if (this.Flow > 1.5) {
        this.Classification = "significant left to right shunt (high flow), candidates for surgical closure or transcatheter device closure"
      } else {
        this.Classification = "left to right shunt"
      }
    }
  }

  constructor(public alertController: AlertController) {}

}
