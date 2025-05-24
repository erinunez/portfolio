import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast" [class.success]="type === 'success'" [class.error]="type === 'error'" [class.show]="show">
      <div class="toast-content">
        <i class="fas" [class.fa-check-circle]="type === 'success'" [class.fa-exclamation-circle]="type === 'error'"></i>
        <div class="message">{{ message }}</div>
      </div>
      <div class="progress-bar"></div>
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(252, 108, 133, 0.2);
      display: flex;
      flex-direction: column;
      min-width: 300px;
      transform: translateX(120%);
      transition: transform 0.3s ease;
      z-index: 1000;
      border: 1px solid rgba(252, 108, 133, 0.2);

      &.show {
        transform: translateX(0);
      }

      &.success {
        border-left: 4px solid rgba(252, 108, 133, 0.8);
        .toast-content i {
          color: #fc6c85;
        }
        .progress-bar {
          background: rgba(252, 108, 133, 0.8);
        }
      }

      &.error {
        border-left: 4px solid rgba(252, 108, 133, 0.8);
        .toast-content i {
          color: #fc6c85;
        }
        .progress-bar {
          background: rgba(252, 108, 133, 0.8);
        }
      }
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 12px;

      i {
        font-size: 1.2rem;
      }

      .message {
        color: #333;
        font-size: 0.95rem;
        font-weight: 500;
      }
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      animation: progress 5s linear forwards;
      border-radius: 0 0 12px 12px;
    }

    @keyframes progress {
      from {
        width: 100%;
      }
      to {
        width: 0%;
      }
    }
  `]
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
} 