import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  features = [
    {
      title: 'User Authentication & Authorization',
      description: 'Secure user login and role-based access control to protect sensitive information.',
      icon: 'lock'
    },
    {
      title: 'Customer Information Management',
      description: 'Centralized customer database for easy access and updates to customer profiles.',
      icon: 'users'
    },
    // Add more features here
  ];
}