import { Component } from '@angular/core';





@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.css']
})
export class EmpHomeComponent {



  id:any;
  name:any;
  day="";
  date="";
  currTime="";
  currTimeOut="";

  products = [
    {id:"", day: "", date: "", currTime: "",currTimeOut:"" }
  ];

  checkIn() {
    const currentDate = new Date();
    this.id =this.products.length;
    this.day =currentDate.toLocaleDateString('en-US',{weekday:"long"})  
    this.date =currentDate.toLocaleDateString('en-US');
    this.currTime =currentDate.toLocaleTimeString('en-US')
    
  

  this.products = [
    {
      id:this.id,
      day: this.day,
      date: this.date,
      currTime: this.currTime,
      currTimeOut:""
    }
  ];
  
  console.log(this.products);
}

checkOut(){
  const currentDate = new Date();
    this.id =this.products.length;
    this.day =currentDate.toLocaleDateString('en-US',{weekday:"long"})  
    this.date =currentDate.toLocaleDateString('en-US');
    this.currTimeOut =currentDate.toLocaleTimeString('en-US')
  

    this.products = [
      {
        id:this.id,
        day: this.day,
        date: this.date,
        currTime: this.currTime,
        currTimeOut:this.currTimeOut
      }
    ];
    
    console.log(this.products);
  }
}




 
  

  // checkedIn=true;
  // checkedOut=false;
  // currentDate = new Date();
  // dates: { index: number, date: Date, checkIn: string, checkOut: string, checkInOut: string }[] = [];
  // currentIndex = 0;

  // constructor() {
  //   this.getDatesForMonth(new Date());
  // }



  // private getDatesForMonth(date: Date): void {
  //   const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDate();

  //   for (let i = 1; i <= daysInMonth; i++) {
  //     const dateObj = {
  //       index: i,
  //       date: new Date(date.getFullYear(), date.getMonth(), i),
  //       checkIn: '',
  //       checkOut: '',
  //       checkInOut: ''
  //     };

  //     this.dates.push(dateObj);
  //   }
  // }

  // increaseDate(numDays: number): void {
  //   this.currentIndex += numDays;
  // }

  // checkIn(): void {
  //   const dateObj = this.dates[this.currentIndex];
  //   dateObj.checkIn = new Date().toLocaleTimeString();
  //   dateObj.checkInOut = 'In';
  //   this.checkedIn= false;
  //   this.checkedOut=true;

  // }

  // checkOut(): void {
  //   const dateObj = this.dates[this.currentIndex];
  //   dateObj.checkOut = new Date().toLocaleTimeString();
  //   dateObj.checkInOut = 'Out';
  //   this.currentIndex++;
  //   this.checkedOut=false;
  //   this.checkedIn= true;
  //   if (this.currentIndex >= this.dates.length) {
  //     // If there are no more dates in the array, add a new one
  //     const nextDate = new Date(this.dates[this.dates.length - 1].date.getTime() + 86400000);
  //     const newDateObj = {
  //       index: this.dates.length + 1,
  //       date: nextDate,
  //       checkIn: '',
  //       checkOut: '',
  //       checkInOut: ''
  //     };

  //     this.dates.push(newDateObj);
  //   }
  // }

  // calculateDuration(checkIn: string, checkOut: string): string {
  //   if (!checkIn || !checkOut) {
  //     return '';
  //   }

  //   const checkInDate = new Date(`01/01/2022 ${checkIn}`);
  //   const checkOutDate = new Date(`01/01/2022 ${checkOut}`);
  //   const diff = checkOutDate.getTime() - checkInDate.getTime();
  //   const minutes = Math.floor(diff / 1000 / 60);
  //   const hours = Math.floor(minutes / 60);
  //   const remainingMinutes = minutes % 60;

  //   return `${hours} Hours ${remainingMinutes} Minutes`;
  // }


  // getTotalHours(date: { checkIn: string; checkOut: string }): string {
  //   if (date.checkIn && date.checkOut) {
  //     const checkInTime = new Date(date.checkIn);
  //     const checkOutTime = new Date(date.checkOut);
  //     const diffMs = checkOutTime.getTime() - checkInTime.getTime();
  //     const diffHrs = Math.floor(diffMs / 1000 / 60 / 60);
  //     const diffMins = Math.floor((diffMs / 1000 / 60) % 60);
  //     return `${diffHrs} hours ${diffMins} minutes`;
  //   }
  //   return '-';
  // }




