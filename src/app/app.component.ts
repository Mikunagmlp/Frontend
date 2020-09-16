import { Component } from '@angular/core';
import { PdfMakeWrapper,Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';


  generatePDF() {
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('Hello World').bold().italics().end 

    );
    pdf.create().open(); 



  }
}
