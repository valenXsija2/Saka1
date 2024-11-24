// modal.type.tsx
export interface ModalProps {
  type: 'Rounded' | 'Simple';
  size: 'Small' | 'Medium' | 'Large';
  isOpen: boolean;
  onClose: () => void;
  content: string; // Add this line
}
