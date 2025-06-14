import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div *ngIf="show" class="toast" [class.success]="type === 'success'" [class.error]="type === 'error'">
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
      background: var(--background-light);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(252, 108, 133, 0.2);
      display: flex;
      flex-direction: column;
      min-width: 300px;
      z-index: 99999;
      border: 1px solid rgba(252, 108, 133, 0.2);
    }

    .toast.success {
      border-left: 4px solid rgba(252, 108, 133, 0.8);
    }
    .toast.success .toast-content i {
      color: #fc6c85;
    }
    .toast.success .progress-bar {
      background: rgba(252, 108, 133, 0.8);
    }

    .toast.error {
      border-left: 4px solid rgba(252, 108, 133, 0.8);
    }
    .toast.error .toast-content i {
      color: #fc6c85;
    }
    .toast.error .progress-bar {
      background: rgba(252, 108, 133, 0.8);
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .toast-content i {
      font-size: 1.2rem;
    }
    .toast-content .message {
      color: var(--text-dark);
      font-size: 0.95rem;
      font-weight: 500;
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

    :host-context(.dark-theme) {
      .toast {
        top: -30px;
        right: -160px;
        background: rgba(45, 45, 45, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(252, 108, 133, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
      .toast-content .message {
        color: var(--text-light);
      }
    }
  `]
})
export class ToastComponent implements OnChanges {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['show'] && changes['show'].currentValue) {
    //   setTimeout(() => {
    //     this.close.emit();
    //   }, 5000);
    // }
  }
} 