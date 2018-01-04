import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

declare var grapesjs: any; // Important!

@Component({
  selector: 'app-awesome-component',
  template: '<div id="gjs"></div>',
  styleUrls: ['./awesome-component.component.css']
})
export class AwesomeComponentComponent implements OnInit {
  data = '';
  openDiv = '<div class="my-block">';
  closeDiv = '</div>';
  fullDiv = '</div>';
  constructor(private http: Http) { }
  ngOnInit() {
    const editor = grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
    });

    const blockManager = editor.BlockManager;

    return this.http.get('http://raeber.nie-ine.ch:3333/v1/vocabularies')
      .map(
        (lambda: Response) => {
          const data = lambda.json();
          for ( const vocabulary of data.vocabularies) {
            this.data += this.openDiv + vocabulary.shortname + this.closeDiv;
          }
          console.log(this.data);

          blockManager.add('konvolut-titel', {
            label: 'Vokabulare in Knora',
            attributes: { class:'fa fa-newspaper-o' },
            content:  this.data,
          });
          return null;
        }
      )
      .subscribe(response => response = response);





  }





}
