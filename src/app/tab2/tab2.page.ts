import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  neonate: boolean = false;
  PA: number;
  LA: number;
  PV: number;
  PAs: number;
  Hb: number;
  Age: number;
  HR: number;
  oxygen: number;
  qp: number;
  qpstring: string;
  pari: number;
  paristring: string;
  classification: string;
  q1: string = 'q11';

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Impossible Value',
      message: 'The heart rate value is not possible for the corresponding age!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  clear(){
    this.neonate = false;
    this.oxygen = null;
    this.qp = null;
    this.qpstring = null;
    this.pari = null;
    this.paristring = null;
    this.classification = null;
    this.PA = null;
    this.LA = null;
    this.PV = null;
    this.PAs = null;
    this.Hb = null;
    this.Age = null;
    this.HR = null;
  }

  checkq1(event) {
    console.log('radioGroupChange',event.detail);
    this.q1 = event.target.value;
  }

  calculate2() {
    this.qp = this.oxygen / ((this.PV - this.PAs)/100*this.Hb*13.4);
    this.qpstring = (this.qp).toFixed(1);
    this.pari = (this.PA - this.LA) / this.qp;
    this.paristring = (this.pari).toFixed(1);
    if (this.pari > 8) {
      this.classification = 'high resistance, the defect defined as not correctable (by surgery or transcatheter closure) unless proven reactive to oxygen tes';
    } else if (this.pari < 4){
      this.classification = 'low resistance, the defect defined as correctable (by surgery or transcatheter closure)';
    } else {
      this.classification = 'moderate resistance, decision to correct the defect are made individually'
    }
  }

  calculate() {
    if (this.PA == null || this.LA == null || this.PV == null || this.PAs == null || this.Hb == null || this.HR == null){
      this.presentAlert()
    } else if (this.neonate == false && this.Age == null){
      this.presentAlert()
    } else {      
      //hitung oxygen consumption
      if (this.neonate == true){
        this.oxygen = 130
        this.calculate2();
      } else {
        if (this.Age < 3){
          this.oxygen = 160
          this.calculate2();
        } else {
          if (this.q1 == 'q11'){
            if (this.Age < 4){
              if (this.HR < 80){
                this.presentAlert2();
              } else if (this.HR < 90){
                this.oxygen = 155;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 163;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 167;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 171;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 175;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 178;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 182;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 186;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 190;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 6){
              if (this.HR < 70){
                this.presentAlert2();
              } else if (this.HR < 80){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 156;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 160;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 163;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 168;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 171;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 175;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 179;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 182;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 186;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 8){
              if (this.HR < 60){
                this.presentAlert2();
              } else if (this.HR < 70){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 148;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 151;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 155;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 162;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 167;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 171;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 174;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 178;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 181;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 10){
              if (this.HR < 60){
                this.presentAlert2();
              } else if (this.HR < 70){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 145;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 148;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 156;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 163;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 167;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 171;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 175;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 178;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 12){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 139;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 142;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 146;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 153;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 157;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 160;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 165;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 169;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 172;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 176;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 14){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 128;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 132;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 140;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 147;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 151;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 155;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 158;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 162;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 167;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 170;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 174;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 16){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 137;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 142;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 146;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 153;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 157;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 160;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 165;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 169;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 172;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 18){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 129;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 132;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 148;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 155;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 162;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 167;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 20){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 124;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 131;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 135;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 139;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 143;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 147;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 150;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 154;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 157;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 161;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 166;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 25){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 123;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 126;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 137;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 142;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 145;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 153;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 156;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 160;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 165;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 30){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 120;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 124;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 131;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 135;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 139;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 143;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 147;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 150;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 154;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 157;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 35){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 122;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 129;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 145;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 148;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 155;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 40){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 116;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 120;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 124;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 131;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 135;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 139;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 143;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 147;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 150;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else {
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 115;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 119;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 122;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 126;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 137;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 145;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 149;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            }
          } else {
            if (this.Age < 4){
              if (this.HR < 80){
                this.presentAlert2();
              } else if (this.HR < 90){
                this.oxygen = 150;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 153;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 157;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 161;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 165;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 169;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 172;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 176;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 180;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 183;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 6){
              if (this.HR < 70){
                this.presentAlert2();
              } else if (this.HR < 80){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 145;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 156;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 163;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 168;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 171;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 175;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 179;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 8){
              if (this.HR < 60){
                this.presentAlert2();
              } else if (this.HR < 70){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 137;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 142;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 146;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 153;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 156;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 160;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 165;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 168;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 172;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 10){
              if (this.HR < 60){
                this.presentAlert2();
              } else if (this.HR < 70){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 129;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 148;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 152;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 155;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 163;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 167;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 12){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 122;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 129;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 148;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 155;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 159;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 163;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 14){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 115;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 119;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 122;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 126;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 137;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 141;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 145;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 149;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 152;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 156;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 160;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 16){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 112;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 116;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 120;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 123;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 131;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 143;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 146;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 150;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 153;
                this.calculate2();
              } else if (this.HR < 180){
                this.oxygen = 157;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 18){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 109;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 114;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 121;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 128;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 132;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 140;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 148;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 151;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 20){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 107;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 111;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 116;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 119;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 123;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 127;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 130;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 134;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 137;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 142;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 146;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 149;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 25){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 106;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 109;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 114;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 121;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 128;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 132;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 136;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 140;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 144;
                this.calculate2();
              } else if (this.HR < 170){
                this.oxygen = 148;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 30){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 102;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 106;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 109;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 114;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 121;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 128;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 132;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 136;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 140;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 35){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 99;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 103;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 106;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 110;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 115;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 118;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 122;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 125;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 129;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 133;
                this.calculate2();
              } else if (this.HR < 160){
                this.oxygen = 136;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else if (this.Age < 50){
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 97;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 100;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 104;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 107;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 111;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 116;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 119;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 123;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 127;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 130;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            } else {
              if (this.HR < 50){
                this.presentAlert2();
              } else if (this.HR < 60){
                this.oxygen = 94;
                this.calculate2();
              } else if (this.HR < 70){
                this.oxygen = 98;
                this.calculate2();
              } else if (this.HR < 80){
                this.oxygen = 102;
                this.calculate2();
              } else if (this.HR < 90){
                this.oxygen = 105;
                this.calculate2();
              } else if (this.HR < 100){
                this.oxygen = 109;
                this.calculate2();
              } else if (this.HR < 110){
                this.oxygen = 112;
                this.calculate2();
              } else if (this.HR < 120){
                this.oxygen = 117;
                this.calculate2();
              } else if (this.HR < 130){
                this.oxygen = 121;
                this.calculate2();
              } else if (this.HR < 140){
                this.oxygen = 124;
                this.calculate2()
              } else if (this.HR < 150){
                this.oxygen = 128;
                this.calculate2();
              } else {
                this.presentAlert2();
              }
            }
          }
        }
      } 
    }
  }

  constructor(public alertController: AlertController) {}

}
