import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.css']
})
export class BoardOfDirectorsComponent implements OnInit {

  constructor() { }

  directors: any[];

  ngOnInit() {

    this.directors = [
      {
        ImagePath: 'https://www.hginfra.com/images/bod1.jpg',
        Name: 'Mr. Harendra Singh',
        Position: 'Chairman and Managing Director',
        description: `Mr. Harendra Singh has been on the Board of HG Infra since its incorporation and was
        reappointed in the board for a period of five years with effect from May 15, 2017. He holds
        a bachelor's degree in Engineering (Civil) from Jodhpur University and has garnered 25 years
        of experience in the construction industry. For his outstanding achievement in business and
        social service, he has received awards from the Indian Achievers Forum in August and
        November, 2016.`
      },
      {
        ImagePath: 'https://www.hginfra.com/images/vijendra-singh.jpg',
        Name: 'Mr. Vijendra Singh',
        Position: 'Whole Time Director',
        description: `Responsible for the overall functioning of the Company, 
        Mr. Vijendra Singh has been on the Board of HG Infra since its incorporation. 
        After garnering a basic education, he amassed 27 years of experience in the construction industry. 
        He was reappointed as a member of the Board for a period of five years with effect from May 15, 2017.`
      },
      {
        ImagePath: 'https://www.hginfra.com/images/bod1.jpg',
        Name: 'Mr. Harendra Singh',
        Position: 'Chairman and Managing Director',
        IsReadMore:false,
        description: `Mr. Harendra Singh has been on the Board of HG Infra since its incorporation and was
        reappointed in the board for a period of five years with effect from May 15, 2017. He holds
        a bachelor's degree in Engineering (Civil) from Jodhpur University and has garnered 25 years
        of experience in the construction industry. For his outstanding achievement in business and
        social service, he has received awards from the Indian Achievers Forum in August and
        November, 2016.`
      },
      {
        ImagePath: 'https://www.hginfra.com/images/vijendra-singh.jpg',
        Name: 'Mr. Vijendra Singh',
        Position: 'Whole Time Director',
        IsReadMore:false,
        description: `Responsible for the overall functioning of the Company, 
        Mr. Vijendra Singh has been on the Board of HG Infra since its incorporation. 
        After garnering a basic education, he amassed 27 years of experience in the construction industry. 
        He was reappointed as a member of the Board for a period of five years with effect from May 15, 2017.`
      }, {
        ImagePath: 'https://www.hginfra.com/images/bod1.jpg',
        Name: 'Mr. Harendra Singh',
        Position: 'Chairman and Managing Director',
        IsReadMore:false,
        description: `Mr. Harendra Singh has been on the Board of HG Infra since its incorporation and was
        reappointed in the board for a period of five years with effect from May 15, 2017. He holds
        a bachelor's degree in Engineering (Civil) from Jodhpur University and has garnered 25 years
        of experience in the construction industry. For his outstanding achievement in business and
        social service, he has received awards from the Indian Achievers Forum in August and
        November, 2016.`
      },
      {
        ImagePath: 'https://www.hginfra.com/images/vijendra-singh.jpg',
        Name: 'Mr. Vijendra Singh',
        Position: 'Whole Time Director',
        IsReadMore:false,
        description: `Responsible for the overall functioning of the Company, 
        Mr. Vijendra Singh has been on the Board of HG Infra since its incorporation. 
        After garnering a basic education, he amassed 27 years of experience in the construction industry. 
        He was reappointed as a member of the Board for a period of five years with effect from May 15, 2017.`
      }
    ]
  }


  readMore(director: any) {
    
  }

}
