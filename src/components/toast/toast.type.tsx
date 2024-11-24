export interface ToastProps {
  message: string;
  variant: 'success' | 'danger' | 'information' | 'warning';
  size: 'small' | 'medium' | 'large';
  type: 'information' | 'notification' | 'success' | 'danger' | 'eror';
  icon?: React.ReactNode;
}
