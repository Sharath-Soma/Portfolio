import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const scrollKeys = new Set([' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End']);

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '', ariaLabel = 'Dialog' }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const scrollY = window.scrollY;
    const body = document.body;
    const root = document.documentElement;
    const originalStyles = {
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      bodyTouchAction: body.style.touchAction,
      rootOverflow: root.style.overflow,
    };
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    body.dataset.modalOpen = 'true';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    root.style.overflow = 'hidden';

    const close = () => onCloseRef.current();
    const isInModalScroller = (target: EventTarget | null) => target instanceof Element && Boolean(target.closest('[data-modal-scroll]'));
    const preventBackgroundWheel = (event: WheelEvent | TouchEvent) => {
      if (!isInModalScroller(event.target)) event.preventDefault();
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === 'Tab') {
        const focusable: HTMLElement[] = dialog
          ? (Array.from(dialog.querySelectorAll(focusableSelector)) as HTMLElement[]).filter((element) => !element.hasAttribute('disabled'))
          : [];
        if (focusable.length === 0) {
          event.preventDefault();
          dialog?.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
        return;
      }

      const activeElement = document.activeElement;
      const isInteractiveControl = activeElement instanceof HTMLButtonElement
        || activeElement instanceof HTMLAnchorElement
        || activeElement instanceof HTMLInputElement
        || activeElement instanceof HTMLSelectElement
        || activeElement instanceof HTMLTextAreaElement;
      if (scrollKeys.has(event.key) && !isInModalScroller(activeElement) && !isInteractiveControl) event.preventDefault();
    };
    const handleCloseAll = () => close();

    window.addEventListener('keydown', handleKeydown, true);
    window.addEventListener('wheel', preventBackgroundWheel, { passive: false });
    window.addEventListener('touchmove', preventBackgroundWheel, { passive: false });
    window.addEventListener('close-all-modals', handleCloseAll);

    requestAnimationFrame(() => {
      const firstFocusable = dialog?.querySelector<HTMLElement>(focusableSelector);
      (firstFocusable ?? dialog)?.focus();
    });

    return () => {
      window.removeEventListener('keydown', handleKeydown, true);
      window.removeEventListener('wheel', preventBackgroundWheel);
      window.removeEventListener('touchmove', preventBackgroundWheel);
      window.removeEventListener('close-all-modals', handleCloseAll);
      body.style.overflow = originalStyles.bodyOverflow;
      body.style.paddingRight = originalStyles.bodyPaddingRight;
      body.style.touchAction = originalStyles.bodyTouchAction;
      delete body.dataset.modalOpen;
      root.style.overflow = originalStyles.rootOverflow;
      requestAnimationFrame(() => {
        previousFocusRef.current?.focus({
          preventScroll: true,
        });

        window.dispatchEvent(new Event("modal-closed"));
      });
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[1000] bg-[#222222]/40 backdrop-blur-md touch-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onPointerDown={onClose}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-[1001] flex items-center justify-center p-3 sm:p-5 lg:p-6 pointer-events-none">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
              className={`pointer-events-auto relative flex h-[85vh] max-h-[85vh] w-[95vw] max-w-[1100px] flex-col overflow-hidden rounded-[1.25rem] border border-[#E2DFD8] bg-[#FAF8F5] text-[#2D2B28] shadow-premium sm:w-[90vw] ${className}`}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
