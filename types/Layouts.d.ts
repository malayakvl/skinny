declare namespace Layouts {
    interface Root {
        activeLayout: string;
    }

    interface Toast {
        id: number;
        message: ToastMessage;
        type: 'error' | 'success' | 'info';
    }

    type ToastMessage = string | { key: string; options: object };

    interface Meta {
        preWarningSetting?: number;
    }

    interface ModalConfirmationMeta {
        titleKey?: string;
        onConfirm: () => void;
        onCancel?: () => void;
    }
    interface ModalCalendlyMeta {
        titleKey?: string;
        onConfirm: () => void;
        onCancel?: () => void;
    }
}
