import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {

  constructor(private story1: Story1ServiceService) { }

  ngOnInit() {
  }

}
