import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  cardDetails = [
    {
      title: 'Learners Tracker',
      desc: '  MEAN stack application used for managing the learners training details. I have designed both Fontend and Backend dashboard with better user experience.',
      image: 'assets/image/learner.png',
      path:'https://github.com/AyeshaSiddika65689/Learner-tracker'
    
    },
    {
  
      title: 'Kerala Tourism',
      desc: ' Upgraded venture of unique Kerala tourism website with better UI and UX experience that makes the client to communication effectively and understand every one  part of the design. ',
      image: 'assets/image/tourism.png',
      path:'https://ayeshasiddika65689.github.io/tourism/'
      
    },
    {
      title: 'Events 360',
      desc: ' Events 360 is an online event platform with better user interface. I have made it as a fullstack  which is used for booking events and creating virtual events by various organisationan.',
      image: 'assets/image/event.png',
      path:"https://bangalorenew.herokuapp.com/"
     

    },
    {
      title: 'Library',
      desc: '  e-library online which makes more straightforward to be gotten to from anyplace whenever. Clients can sign in to the site and state investigating the books.',
      image: 'assets/image/library.png',
      path:'https://library-assesment.herokuapp.com/'
     
    },
    {
      title: 'ICT Website',
      desc: ' Website re-designed for ICTAK Academy of kerala as a basic project on intern-ship done in mean stack internship.',
      image: 'assets/image/ict.png',
      path:'https://ayeshasiddika65689.github.io/Academy-website/'
     
    },
    {
      title: 'Todo-List',
      desc: ' A basic todo-list that is made out of html, css, javascript, to learn validation.',
      image: 'assets/image/todo-list.png',
      path:'https://ayeshasiddika65689.github.io/Todo-List/'
     
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
