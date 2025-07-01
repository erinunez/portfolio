import { Component, ChangeDetectorRef } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  showToast = false;

  constructor(private cdr: ChangeDetectorRef) {
    // Initialize EmailJS with your public key
    emailjs.init("tn0v7Uv_xltXi7siQ"); // Replace with your actual public key
  }

  public showToastMessage(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showToast = false;
    }, 5000);
  }

  async onSubmit() {
    this.showToastMessage('Message sent successfully!', 'success');
    
    // try {
    //   this.isLoading = true;

    //   const templateParams = {
    //     from_name: this.formData.name,
    //     from_email: this.formData.email,
    //     subject: this.formData.subject,
    //     message: this.formData.message,
    //   };

    //   await emailjs.send(
    //     'service_d133bcp', // Replace with your EmailJS service ID
    //     'template_jerz8ao', // Replace with your EmailJS template ID
    //     templateParams
    //   );

    //   this.showToastMessage('Message sent successfully!', 'success');
    //   this.resetForm();
    // } catch (error) {
    //   this.showToastMessage('Failed to send message. Please try again later.', 'error');
    //   console.error('Error sending email:', error);
    // } finally {
    //   this.isLoading = false;
    // }
  }

  downloadResume() {
    try {
      const resumePath = 'assets/resume/ZaireenAkhzar_Resume 25.0.1.pdf';
      
      // Create a link element
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Zaireen_Akhzar_Resume.pdf'; // Name of the downloaded file
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.showToastMessage('Resume downloaded successfully!', 'success');
    } catch (error) {
      this.showToastMessage('Failed to download resume. Please try again.', 'error');
      console.error('Error downloading resume:', error);
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  
}
