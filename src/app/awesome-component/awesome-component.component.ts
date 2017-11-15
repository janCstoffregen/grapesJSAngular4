import { Component, OnInit } from '@angular/core';

declare var grapesjs: any; // Important!

@Component({
  selector: 'app-awesome-component',
  template: '<div id="gjs"></div>',
  styleUrls: ['./awesome-component.component.css']
})
export class AwesomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const editor = grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
    });

    const blockManager = editor.BlockManager;

    blockManager.add('my-first-nie-ine-block', {
      label: 'NIE-INE Steckbrief',
      attributes: { class:'fa fa-newspaper-o' },
      content: '<div class="my-block">A first block of nie-ine</div>',
    });

    blockManager.add('my-map-block', {
      label: 'Simple map block',
      content: {
        type: 'map', // Built-in 'map' component
        style: {
          height: '350px'
        }
      }
    })

  }



}
